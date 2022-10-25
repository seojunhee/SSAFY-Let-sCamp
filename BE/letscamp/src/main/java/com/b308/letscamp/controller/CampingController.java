package com.b308.letscamp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.b308.letscamp.dto.camping.*;
import com.b308.letscamp.service.CampingService;

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
}
