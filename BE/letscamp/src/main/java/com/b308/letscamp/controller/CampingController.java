package com.b308.letscamp.controller;

import java.util.List;

import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.b308.letscamp.dto.camping.*;
import com.b308.letscamp.service.CampingService;

import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;

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
			@ApiParam(value = "현재 유저 PK", required = true) @RequestParam String userId,
			@ApiParam(value = "선택된 캠핑장 유형", required = true) @RequestParam String category,
			@ApiParam(value = "선택된 반려견 동반 여부", required = true) @RequestParam String animal,
			@ApiParam(value = "선택된 캠핑장 키워드들", required = true) @RequestParam String keywords,
			@ApiParam(value = "jwt토큰", required = true) @RequestParam String jwtToken) throws ParseException {
		return campingService.findByCore(userId, category, animal, keywords);
	}
}
