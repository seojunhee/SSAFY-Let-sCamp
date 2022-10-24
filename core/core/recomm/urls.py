from django.urls import path
from . import views

urlpatterns = [
    # 추천 키워드 기반 추천
    path('<str:category>/<str:animal>/<str:keywords>', views.recommend_campings),
]
