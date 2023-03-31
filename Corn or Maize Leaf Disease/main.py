# fastapi to serve the model as an API endpoint
from fastapi import FastAPI, File, UploadFile
import io
from PIL import Image
import torch
from torchvision import transforms
from torchvision import models
from torch import nn

labels = {0: 'Blight', 1: 'Common_Rust', 2: 'Gray_Leaf_Spot', 3: 'Healthy'}

device = "cuda" if torch.cuda.is_available() else "cpu"

model = models.resnet18(pretrained=True)
model.fc = nn.Linear(in_features=512, out_features=4)
model = model.to(device)
path = "model.pth"
model.load_state_dict(torch.load(path, map_location=torch.device(device)))
model.eval()

app = FastAPI()

@app.get("/")
async def index():
      return "AGRI"

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
      contents = await file.read()
      image = Image.open(io.BytesIO(contents))
      image = image.convert('RGB')
      image = image.resize((256, 256))
      image = transforms.ToTensor()(image)
      image = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                        std=[0.229, 0.224, 0.225])(image)
      image = image.unsqueeze(0)
      image = image.to(device)
      pred = model(image)
      _, pred = torch.max(pred, 1)
      return {"class": labels[pred.item()]}


"""
# requirements.txt
fastapi
uvicorn
torch
torchvision
Pillow
python-multipart
starlette
pydantic
requests
uvloop
httptools

# Dockerfile
FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "localhost", "--port", "8000", "--reload"]

# docker build -t agri .
# docker run -d -p 8000:8000 agri

"""


