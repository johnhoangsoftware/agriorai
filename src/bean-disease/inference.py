import warnings
warnings.filterwarnings('ignore')

import numpy as np # linear algebra

import tensorflow as tf
from tensorflow.keras import models, layers
from tensorflow.keras.models import load_model

import os

resize_and_rescale = tf.keras.Sequential([
  layers.experimental.preprocessing.Resizing(256, 256),
  layers.experimental.preprocessing.Rescaling(1.0/255),
])

data_augmentation = tf.keras.Sequential([
  layers.experimental.preprocessing.RandomFlip("horizontal_and_vertical"),
  layers.experimental.preprocessing.RandomRotation(0.2),
])

input_shape = (32, 256, 256, 3)
n_classes = 3

model = tf.keras.models.Sequential([
    resize_and_rescale,
    data_augmentation,
    layers.Conv2D(16,(3,3), activation='relu', input_shape=input_shape),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(32,(3,3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(16,(3,3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(16,(3,3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(n_classes, activation='softmax'),
])

model.build(input_shape=input_shape)

model.summary()

model.compile(
    optimizer='adam',
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    metrics=['accuracy']
)

model = load_model("./models/bean_disease_model.h5")

def service_bean_disease(image_path):
  image_test = tf.keras.preprocessing.image.load_img(os.path.join(image_path), target_size=(256, 256))
  image_test = tf.keras.preprocessing.image.img_to_array(image_test)
  image_test = tf.expand_dims(image_test, 0)
  class_names = ['angular_leaf_spot', 'bean_rust', 'healthy']
  # predict the class
  pred = model.predict(image_test)

  return {
    "Illness name": class_names[np.argmax(pred[0])],
    "Confidence score": round(100 * np.max(pred[0]), 2)
  }
