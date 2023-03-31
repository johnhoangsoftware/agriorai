## Introduction

This is a Python script that serves a trained PyTorch model as an API using FastAPI. The model predicted the plant diseases from an image of a plant.

## Model

The model used in this script is a ResNet-18 pre-trained on ImageNet. We replace the final fully connected layer with a new one with four output neurons that correspond to the four classes of plant diseases we want to identify.

## Dependencies

- FastAPI
- torch
- torchvision
- Pillow
- python-multipart
- starlette
- pydantic
- requests
- uvloop

The version for each of the above dependencies is available in the requirements.txt file.

## Usage

- Clone the repository to your local machine.
- Install Docker on your machine.
- Open your terminal, navigate to the directory where the repository is cloned, and run the following command to build the Docker image:

```shell
docker build -t agri .
```

- After building the image, run the following command to start the container:

```shell
docker run -d -p 9000:9000 agri
```

- The API is now available on http://localhost:9000/predict.

## API endpoints

- /predict: Takes an image file as input and returns a JSON object with the predicted class.

## Input

The input to the API is an image file in JPG or PNG format.

## Output

The API returns a JSON object with the predicted class of the plant disease in the input image.

## Example usage

- You can test the API by sending a POST request with an image file to the /predict endpoint using a tool like `curl`. An example is shown below:

```shell
curl -X POST "http://localhost:9000/predict" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "file=@/path/to/image.jpg"
```

- The output will be in JSON format and will look something similar to:

```JSON
{
    "class": "Common_Rust"
}
```

## Conclusion

This Python script demonstrates how to create an API using FastAPI to serve a model trained on PyTorch. By following the instructions above, you can deploy the API in a Docker container and use it to make predictions on plant disease images.

## Dataset
```https://www.kaggle.com/datasets/smaranjitghose/corn-or-maize-leaf-disease-dataset```
