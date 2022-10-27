from venv import create
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
from sqlalchemy import create_engine
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 추천 키워드 기반 추천


@api_view(['GET'])
def recommend_campings(request, category, animal, keywords):
    # 현재 유저 id 값 추출
    # user_id = userId

    # MySQL 테이블 connect
    engine = create_engine(
        'mysql+pymysql://camp:camp308@k7b308.p.ssafy.io:3306/letscamp', convert_unicode=True)
    conn = engine.connect()

    # Camping 테이블, Hate 테이블 연동
    campings = pd.read_sql_table('Camping', conn)
    hates = pd.read_sql_table('Hate', conn)

    # 현재 유저의 Hate 정보 추출
    # user_hates = hates['userId'] == user_id

    # 반려 동물 비동반일 경우
    if animal == '비동반':
        # 반려동물 동반 허락 유무 상관 없이 선택 category로 필터링
        is_right = (campings['category'].str.contains(category))

        df = campings[is_right]

        # 입력받은 동반유형 키워드를 데이터 프레임에 추가
        new_data = {
            'name': ['선택 답변 키워드'],
            'keywords': [keywords],
        }

        new_df = pd.DataFrame(new_data)
        campings_df = pd.concat([df, new_df], ignore_index=True)

        # 데이터프레임 유사도 계산
        count_vect = CountVectorizer(min_df=0, ngram_range=(1, 2))
        keywords_mat = count_vect.fit_transform(campings_df['keywords'])
        keywords_sim = cosine_similarity(keywords_mat, keywords_mat)

        # 유사도 높은 순 정렬
        sorted_ind = keywords_sim.argsort()[:, ::-1]
        base_index = campings_df.shape[0] - 1
        similar_indexes = sorted_ind[base_index, 1:11]

        similar_indexes = similar_indexes.reshape(-1)

        return Response(similar_indexes, status=status.HTTP_200_OK)
    # 반려 동물 동반일 경우
    else:
        # 반려동물 동반이 가능하며 선택 category와 일치하는 캠핑장만
        is_right = (campings['category'].str.contains(
            category)) & (campings['animal'] == '가능')

        df = campings[is_right]

        # 입력받은 동반유형 키워드를 데이터 프레임에 추가
        new_data = {
            'name': ['선택 답변 키워드'],
            'keywords': [keywords],
        }

        new_df = pd.DataFrame(new_data)
        campings_df = pd.concat([df, new_df], ignore_index=True)

        # 데이터프레임 유사도 계산
        count_vect = CountVectorizer(min_df=0, ngram_range=(1, 2))
        keywords_mat = count_vect.fit_transform(campings_df['keywords'])
        keywords_sim = cosine_similarity(keywords_mat, keywords_mat)

        # 유사도 높은 순 정렬
        sorted_ind = keywords_sim.argsort()[:, ::-1]
        base_index = campings_df.shape[0] - 1
        similar_indexes = sorted_ind[base_index, 1:11]

        similar_indexes = similar_indexes.reshape(-1)

        return Response(similar_indexes, status=status.HTTP_200_OK)
