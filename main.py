import torch
from PIL import Image
import torchvision.transforms as transforms
import torch.nn as nn
import torch.nn.functional as F   
from fastapi import FastAPI, File, UploadFile




classes = ['Apple___Apple_scab',
 'Apple___Black_rot',
 'Apple___Cedar_apple_rust',
 'Apple___healthy',
 'Blueberry___healthy',
 'Cherry_(including_sour)___Powdery_mildew',
 'Cherry_(including_sour)___healthy',
 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
 'Corn_(maize)___Common_rust_',
 'Corn_(maize)___Northern_Leaf_Blight',
 'Corn_(maize)___healthy',
 'Grape___Black_rot',
 'Grape___Esca_(Black_Measles)',
 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
 'Grape___healthy',
 'Orange___Haunglongbing_(Citrus_greening)',
 'Peach___Bacterial_spot',
 'Peach___healthy',
 'Pepper,_bell___Bacterial_spot',
 'Pepper,_bell___healthy',
 'Potato___Early_blight',
 'Potato___Late_blight',
 'Potato___healthy',
 'Raspberry___healthy',
 'Soybean___healthy',
 'Squash___Powdery_mildew',
 'Strawberry___Leaf_scorch',
 'Strawberry___healthy',
 'Tomato___Bacterial_spot',
 'Tomato___Early_blight',
 'Tomato___Late_blight',
 'Tomato___Leaf_Mold',
 'Tomato___Septoria_leaf_spot',
 'Tomato___Spider_mites Two-spotted_spider_mite',
 'Tomato___Target_Spot',
 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
 'Tomato___Tomato_mosaic_virus',
 'Tomato___healthy']

# for moving data to device (CPU or GPU)
def to_device(data, device):
    """Move tensor(s) to chosen device"""
    if isinstance(data, (list,tuple)):
        return [to_device(x, device) for x in data]
    return data.to(device, non_blocking=True)

def get_default_device():
    """Pick GPU if available, else CPU"""
    if torch.cuda.is_available:
        return torch.device("cuda")
    else:
        return torch.device("cpu")
    

device = torch.device("cpu")


# for calculating the accuracy
def accuracy(outputs, labels):
    _, preds = torch.max(outputs, dim=1)
    return torch.tensor(torch.sum(preds == labels).item() / len(preds))


# base class for the model
class ImageClassificationBase(nn.Module):
    
    def training_step(self, batch):
        images, labels = batch
        out = self(images)                  # Generate predictions
        loss = F.cross_entropy(out, labels) # Calculate loss
        return loss
    
    def validation_step(self, batch):
        images, labels = batch
        out = self(images)                   # Generate prediction
        loss = F.cross_entropy(out, labels)  # Calculate loss
        acc = accuracy(out, labels)          # Calculate accuracy
        return {"val_loss": loss.detach(), "val_accuracy": acc}
    
    def validation_epoch_end(self, outputs):
        batch_losses = [x["val_loss"] for x in outputs]
        batch_accuracy = [x["val_accuracy"] for x in outputs]
        epoch_loss = torch.stack(batch_losses).mean()       # Combine loss  
        epoch_accuracy = torch.stack(batch_accuracy).mean()
        return {"val_loss": epoch_loss, "val_accuracy": epoch_accuracy} # Combine accuracies
    
    def epoch_end(self, epoch, result):
        print("Epoch [{}], last_lr: {:.5f}, train_loss: {:.4f}, val_loss: {:.4f}, val_acc: {:.4f}".format(
            epoch, result['lrs'][-1], result['train_loss'], result['val_loss'], result['val_accuracy']))
        
# Architecture for training

# convolution block with BatchNormalization
def ConvBlock(in_channels, out_channels, pool=False):
    layers = [nn.Conv2d(in_channels, out_channels, kernel_size=3, padding=1),
             nn.BatchNorm2d(out_channels),
             nn.ReLU(inplace=True)]
    if pool:
        layers.append(nn.MaxPool2d(4))
    return nn.Sequential(*layers)


# resnet architecture 
class ResNet9(ImageClassificationBase):
    def __init__(self, in_channels, num_diseases):
        super().__init__()
        
        self.conv1 = ConvBlock(in_channels, 64)
        self.conv2 = ConvBlock(64, 128, pool=True) # out_dim : 128 x 64 x 64 
        self.res1 = nn.Sequential(ConvBlock(128, 128), ConvBlock(128, 128))
        
        self.conv3 = ConvBlock(128, 256, pool=True) # out_dim : 256 x 16 x 16
        self.conv4 = ConvBlock(256, 512, pool=True) # out_dim : 512 x 4 x 44
        self.res2 = nn.Sequential(ConvBlock(512, 512), ConvBlock(512, 512))
        
        self.classifier = nn.Sequential(nn.MaxPool2d(4),
                                       nn.Flatten(),
                                       nn.Linear(512, num_diseases))
        
    def forward(self, xb): # xb is the loaded batch
        out = self.conv1(xb)
        out = self.conv2(out)
        out = self.res1(out) + out
        out = self.conv3(out)
        out = self.conv4(out)
        out = self.res2(out) + out
        out = self.classifier(out)
        return out        
    




model = to_device(ResNet9(3, len(classes)), device) 
model_path = './plant-disease-model.pth'
model.load_state_dict(torch.load(model_path,map_location=torch.device('cpu')))
model.eval()




# build api with FastAPI
app = FastAPI(docs_url='/',
              title='API Plant Disease Detection Powered By AGRIBLOCK',)

@app.get("/info",tags=["Infomation About API AI Plant Disease Detection Powered By AGRIBLOCK"])
def get_info_about_api():
    return "Powered By AGRIBLOCK"

@app.post("/apple/v1",tags=["Apple"],description="Predict Disease Apple With Image Of Apple Leaf (Healthy, Black Rot, Cedar Apple Rust, Powdery Mildew)")
async def predict_disease_apple_with_image_of_apple_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Apple':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}
    
@app.post("/cherry/v1",tags=["Cherry"],description="Predict Disease Cherry With Image Of Cherry Leaf (Powdery Mildew, Healthy)")
async def predict_disease_cherry_with_image_of_cherry_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Cherry_(including_sour)':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("/corn/v1",tags=["Corn"],description="Predict Disease Corn With Image Of Corn Leaf (Common Rust, Northern Leaf Blight, Healthy, Cercospora Leaf Spot Gray Leaf Spot)")

async def predict_disease_corn_with_image_of_corn_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Corn_(maize)':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("/grape/v1",tags=["Grape"],description="Predict Disease Grape With Image Of Grape Leaf (Black Rot, Esca (Black Measles), Leaf Blight (Isariopsis Leaf Spot), Healthy)")
async def predict_disease_grape_with_image_of_grape_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Grape':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}
        
@app.post("/peach/v1",tags=["Peach"],description="Predict Disease Peach With Image Of Peach Leaf (Bacterial Spot, Healthy)")
async def predict_disease_peach_with_image_of_peach_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Peach':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("/orange/v1",tags=["Orange"],description="Predict Disease Orange With Image Of Orange Leaf (Haunglongbing (Citrus Greening), Healthy)")
async def predict_disease_orange_with_image_of_orange_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Orange':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

   
@app.post("/pepper/v1",tags=["Pepper"],description="Predict Disease Pepper With Image Of Pepper Leaf (Bacterial Spot, Healthy)" )
async def predict_disease_pepper_with_image_of_pepper_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Pepper,_bell':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("/potato/v1",tags=["Potato"],description="Predict Disease Potato With Image Of Potato Leaf (Early Blight, Late Blight, Healthy)"  )
async def predict_disease_potato_with_image_of_potato_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Potato':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("/strawberry/v1",tags=["Strawberry"],description="Predict Disease Strawberry With Image Of Strawberry Leaf (Leaf Scorch, Healthy)" )
async def predict_disease_strawberry_with_image_of_strawberry_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Strawberry':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("/tomato/v1",tags=["Tomato"],description="Predict Disease Tomato With Image Of Tomato Leaf (Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, Healthy)")
async def predict_disease_tomato_with_image_of_tomato_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Tomato':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}

@app.post("squash/v1",tags=["Squash"],description="Predict Disease Squash With Image Of Squash Leaf (Powdery Mildew, Healthy)")
async def predict_disease_squash_with_image_of_squash_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file)
    # resize the image to 256x256 pixels
    image = image.resize((256, 256))
    # convert image to tensor 1x3x256x256
    image = transforms.ToTensor()(image)
    # add batch dimension 1x1x3x256x256
    image = image.unsqueeze(0)
    # predict the class of the image and % accuracy
    with torch.no_grad():
        output = model(image)
        _, preds = torch.max(output, 1)
        class_name = classes[preds]
        if class_name.split('___')[0] != 'Squash':
            return {"class_name": None}
        else:
            return {"class_name": class_name, "accuracy": float(torch.max(F.softmax(output, dim=1)))}
        



""" # requirements.txt
fastapi
uvicorn
torch
torchvision
Pillow
pydantic
starlette
requests
numpy
matplotlib
scikit-learn
scipy
tqdm

# Dockerfile
# Dockerfile
FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["/bin/bash", "-c", "uvicorn main:app --host 0.0.0.0 --port 9000"] """