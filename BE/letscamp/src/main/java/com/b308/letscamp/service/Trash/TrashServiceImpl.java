package com.b308.letscamp.service.Trash;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class TrashServiceImpl implements TrashService{

    @Override
    @ApiOperation(value = "trash classification", notes = "trash classification")
    public String classificationByImage(String filename) {
        // 1. 파라미터를 이용하여 core 서버에 추천 요청
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();
        String path = filename;
        WebClient webClient = WebClient.builder()
                .exchangeStrategies(exchangeStrategies)
                .baseUrl("http://k7b308.p.ssafy.io:8000/classification/")
                .build();
        String apiResponse = webClient
                .get()
                .uri(uriBuilder -> uriBuilder.path(path).build())
                .exchange()
                .block()
                .bodyToMono(String.class)
                .block();

        return apiResponse;
    }
}
