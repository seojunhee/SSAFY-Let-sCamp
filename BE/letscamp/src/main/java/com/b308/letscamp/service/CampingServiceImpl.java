package com.b308.letscamp.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.b308.letscamp.Exception.CampingNotFoundException;
import com.b308.letscamp.dto.camping.CampingFindAllResponse;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.repository.CampingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CampingServiceImpl implements CampingService {
	private final CampingRepository campingRepository;

	@Override
	public CampingFindResponse findById(long id) {
		Optional<Camping> campingOptional = campingRepository.findById(id);
		if(campingOptional.isEmpty()) {
			throw new CampingNotFoundException();
		}
		return campingOptional.map(CampingFindResponse::new).orElse(null);
	}

	@Override
	public List<CampingFindAllResponse> findAll() {
		return campingRepository.findAll().stream().map(CampingFindAllResponse::new).collect(Collectors.toList());
	}
	
}
