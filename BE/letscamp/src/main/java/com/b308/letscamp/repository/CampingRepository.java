package com.b308.letscamp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.entity.Camping;

public interface CampingRepository extends JpaRepository<Camping, Long> {
	
}
