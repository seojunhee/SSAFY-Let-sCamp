package com.b308.letscamp.controller;

import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.service.CampingService;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class CampingController {
	private final CampingService campingService;
	
	@GetMapping("/camping")
	public List<CampingFindAllResponse> readAll() {
		return campingService.findAll();
	}
	
	@GetMapping("/camping/{id}")
	public CampingFindResponse read(@PathVariable long id) {
		return campingService.findById(id);
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
