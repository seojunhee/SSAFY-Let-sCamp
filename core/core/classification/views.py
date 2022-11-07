from venv import create
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from PIL import Image
import numpy as np
from keras.models import load_model
import urllib.request as req
from io import BytesIO

# 이미지 분류
@api_view(['GET'])
def trash_classification(request, filename):
    image_w = 64
    image_h = 64

    pixels = image_h * image_w * 3

    X = []
    filenames = []

    url = "https://firebasestorage.googleapis.com/v0/b/let-s-camp.appspot.com/o/" + filename + ".jpg?alt=media&token=75b212e3-27db-46a1-ab48-ad06afa5d3e2"
    res = req.urlopen(url).read()
    print(type(res))

    img = Image.open(BytesIO(res))
    img = img.convert("RGB")
    img = img.resize((image_w, image_h))
    data = np.asarray(img)
    filenames.append(img)
    X.append(data)

    X = np.array(X)

    # 모델 불러오기
    model = load_model('./model/multi_img_classification.model')

    # 모델로 예측하기
    prediction = model.predict(X)
    np.set_printoptions(formatter={'float': lambda x: "{0:0.3f}".format(x)})
    
    pre_ans = prediction.argmax()

    pre_ans_str = ''
    if pre_ans == 0:
        pre_ans_str = "cardboard"
    elif pre_ans == 1:
        pre_ans_str = "glass"
    elif pre_ans == 2:
        pre_ans_str = "metal"
    elif pre_ans == 3:
        pre_ans_str = "paper"
    elif pre_ans == 4:
        pre_ans_str = "plastic"
    else:
        pre_ans_str = "trash"

    print(prediction)

    return Response(pre_ans_str, status=status.HTTP_200_OK)