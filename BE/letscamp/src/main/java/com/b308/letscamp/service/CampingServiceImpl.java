package com.b308.letscamp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

import com.b308.letscamp.Exception.CampingNotFoundException;
import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.repository.CampingRepository;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CampingServiceImpl implements CampingService {
	private final CampingRepository campingRepository;

	@Override
	@ApiOperation(value = "캠핑장 ID값으로 조회", notes = "캠핑장 ID값으로 조회")
	public CampingFindResponse findById(long id) {
		Optional<Camping> campingOptional = campingRepository.findById(id);
		if(campingOptional.isEmpty()) {
			throw new CampingNotFoundException();
		}
		return campingOptional.map(CampingFindResponse::new).orElse(null);
	}

	@Override
	@ApiOperation(value = "캠핑장 전체 조회", notes = "캠핑장 전체 조회")
	public List<CampingFindAllResponse> findAll() {
		return campingRepository.findAll().stream().map(CampingFindAllResponse::new).collect(Collectors.toList());
	}

	@Override
	@ApiOperation(value = "캠핑장 추천 조회", notes = "캠핑장 추천 조회")
	public List<CampingFindResponse> findByCore(String category, String animal, String keywords, String jwtToken) throws ParseException {
		// 1. 파라미터를 이용하여 core 서버에 추천 요청
		ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
				.codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
				.build();
		Long userId = 0L;
		String path = userId + "/" + category + "/" + animal + "/" + keywords;
		WebClient webClient = WebClient.builder()
				.exchangeStrategies(exchangeStrategies)
				.baseUrl("http://k7b308.p.ssafy.io:8000/recomm/")
				.build();
		String apiResponseToJson = webClient
				.get()
				.uri(uriBuilder -> uriBuilder.path(path).build())
				.exchange()
				.block()
				.bodyToMono(String.class)
				.block();
		
		// 2. 반환된 Response 값 Json으로 변환
		JSONParser jsonParser = new JSONParser();
		JSONArray jsonArray = (JSONArray)jsonParser.parse(apiResponseToJson);
		
		// 3. Json을 파싱하여 id값을 통해 캠핑장 정보 반환
		List<CampingFindResponse> campingList = new ArrayList<>();
		for (int i = 0; i < jsonArray.size(); i++) {
			String str = jsonArray.get(i).toString();
			Long id = Long.parseLong(str);
			id = id + 1L;
			CampingFindResponse camping = findById(id);
			campingList.add(camping);
		}
		return campingList;
	}

	@Override
	public Long findUserId(String jwtToken) {
		return null;
	}
	
}