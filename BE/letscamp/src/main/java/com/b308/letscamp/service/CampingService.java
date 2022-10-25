package com.b308.letscamp.service;

import java.util.List;

import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;

public interface CampingService {
	CampingFindResponse findById(long id);
	List<CampingFindAllResponse> findAll();
}
