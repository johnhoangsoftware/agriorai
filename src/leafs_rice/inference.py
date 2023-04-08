from fastai.vision.all import *
from PIL import Image

# Đường dẫn đến file lưu trữ mô hình
model_path = 'riceleafs.pkl'
# Load mô hình
learner = load_learner(model_path)

def service_rice(img_path):
    img = Image.open(img_path)
    img = img.resize((480, 480))

    # predict class of image_test
    pred_class,pred_idx,probs = learner.predict(img)
    # print prediction and probability
    # print(pred_class, probs[pred_idx].item())
    return {
        "Illness name": pred_class,
        "Confidence score":  probs[pred_idx].item()
    }