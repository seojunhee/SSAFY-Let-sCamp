from django.urls import path
from . import views

urlpatterns = [
    # 추천 키워드 기반 추천
    path('', views.recommend_campings),
]
