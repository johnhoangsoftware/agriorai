# Plant Disease Classification Model
This is a deep learning model that can classify plant disease images into 38 different classes. The model is trained on a dataset containing images of diseased and healthy plants. The classes that the model can classify are listed below:

*   Apple___Apple_scab
*   Apple___Black_rot
*  Apple___Cedar_apple_rust
* Apple___healthy
*   Blueberry___healthy
*   Cherry_(including_sour)___Powdery_mildew
*   Cherry_(including_sour)___healthy
*   Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot
*   Corn_(maize)__Common_rust
*   Corn_(maize)___Northern_Leaf_Blight
*   Corn_(maize)___healthy
*   Grape___Black_rot
*   Grape___Esca_(Black_Measles)
*   Grape___Leaf_blight_(Isariopsis_Leaf_Spot)
*   Grape___healthy
*   Orange___Haunglongbing_(Citrus_greening)
*   Peach___Bacterial_spot
*   Peach___healthy
*   Pepper,_bell___Bacterial_spot
*   Pepper,_bell___healthy
*   Potato___Early_blight
*   Potato___Late_blight
*   Potato___healthy
*   Raspberry___healthy
*   Soybean___healthy
*   Squash___Powdery_mildew
*   Strawberry___Leaf_scorch
*   Strawberry___healthy
*   Tomato___Bacterial_spot
*   Tomato___Early_blight
*   Tomato___Late_blight
*   Tomato___Leaf_Mold
*   Tomato___Septoria_leaf_spot
*   Tomato___Spider_mites Two-spotted_spider_mite
*   Tomato___Target_Spot
*   Tomato___Tomato_Yellow_Leaf_Curl_Virus
*   Tomato___Tomato_mosaic_virus
*   Tomato___healthy

# Model
The model architecture is a ResNet9 neural network which takes in an input image and returns a classification for one of the 38 plant diseases. The model was trained using the Cross-Entropy loss function and the Adam optimizer.

The model code is written in Python using the PyTorch deep learning framework. It has the following components:

accuracy: A function to calculate the accuracy of the model predictions
ImageClassificationBase: A base class for the model with functions to calculate the loss and accuracy during training and validation
ConvBlock: A convolution block with BatchNormalization used in the ResNet9 architecture
ResNet9: The ResNet9 architecture for the model
The ResNet9 architecture consists of 2 residual blocks with 2 convolutional layers each. Each residual block has skip connections to its input. The final layer of the model is a fully connected layer that takes the output of the last convolutional block and maps it to the 38 possible plant diseases.

To use the model, pass an input image through the ResNet9 class and get the predicted class.

# Dataset
The dataset used to train the model is publicly available on Kaggle, and can be downloaded from the following link:
```https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset```