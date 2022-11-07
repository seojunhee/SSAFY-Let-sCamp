from django.urls import path
from . import views

urlpatterns = [
    # 분류할 이미지를 전달
    path('<str:filename>',
         views.trash_classification),
]
