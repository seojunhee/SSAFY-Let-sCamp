package com.b308.letscamp.service;

import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import org.json.simple.parser.ParseException;

import java.util.List;

public interface CampingService {
	CampingFindResponse findById(long id);
	List<CampingFindAllResponse> findAll();
	List<CampingFindResponse> findByCore(String userId, String category, String animal, String keywords) throws ParseException;
	List<CampingFindResponse> findByName(String name);
	List<CampingFindResponse> findByDosi(String dosi);
}
