package com.b308.letscamp.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.parser.ParseException;

import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;

public interface CampingService {
	CampingFindResponse findById(long id);
	List<CampingFindAllResponse> findAll();
	Long findUserId(String jwtToken);
	List<CampingFindResponse> findByCore(String category, String animal, String keywords, String jwtToken) throws ParseException;
}
