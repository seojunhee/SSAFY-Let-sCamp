package com.b308.letscamp.controller;

import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.service.CampingService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class CampingController {
	private final CampingService campingService;
	
	@GetMapping("/camping")
	@ApiOperation(value = "캠핑 정보 전체 조회", notes = "캠핑 정보 전체 조회한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "요청 성공"),
			@ApiResponse(code = 500, message = "서버 에러")
	})
	public List<CampingFindAllResponse> readAll() {
		return campingService.findAll();
	}
	
	@GetMapping("/camping/{id}")
	@ApiOperation(value = "캠핑 정보 1개 조회", notes = "캠핑 정보 1개 조회한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "요청 성공"),
			@ApiResponse(code = 500, message = "서버 에러")
	})
	public CampingFindResponse read(@PathVariable long id) {
		return campingService.findById(id);
	}

	@GetMapping("/camping/random")
	@ApiOperation(value = "랜덤해서 캠핑 정보 20개 조회", notes = "랜덤해서 캠핑 정보 20개 조회한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "요청 성공"),
			@ApiResponse(code = 500, message = "서버 에러")
	})
	public List<CampingFindAllResponse> readRandom() {
		List<CampingFindAllResponse> list = campingService.findAll();

		// 캠핑리스트 순서 랜덤으로 섞기
		Collections.shuffle(list);

		List<CampingFindAllResponse> result = new ArrayList<>();
		for(int i = 0; i < 20; i++) {
			result.add(list.get(i));
		}

		return result;
	}
	
	@GetMapping("/camping/recomm/{category}/{animal}/{keywords}")
	public List<CampingFindResponse> readByCore(
			@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
			@ApiParam(value = "선택된 캠핑장 유형", required = true) @PathVariable  String category,
			@ApiParam(value = "선택된 반려견 동반 여부", required = true) @PathVariable String animal,
			@ApiParam(value = "선택된 캠핑장 키워드들", required = true) @PathVariable String keywords) throws ParseException {
		String userId = response.getHeader("userId");
		return campingService.findByCore(userId, category, animal, keywords);
	}
	
	@GetMapping("/camping/searchbyname/{name}")
	public List<CampingFindResponse> selectByName(
			@ApiParam(value = "입력된 이름을 포함한 캠핑장들 조회", required = true) @PathVariable  String name) {
		return campingService.findByName(name);
	}
	
	@GetMapping("/camping/searchbydosi/{dosi}")
	public List<CampingFindResponse> selectByDosi(
			@ApiParam(value = "입력된 시,도 내의 캠핑장들 조회", required = true) @PathVariable  String dosi) {
		return campingService.findByDosi(dosi);
	}
}
