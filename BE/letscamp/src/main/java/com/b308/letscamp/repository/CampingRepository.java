package com.b308.letscamp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.entity.Camping;

public interface CampingRepository extends JpaRepository<Camping, Long> {
	List<CampingFindResponse> findByNameContaining(String name);
	List<CampingFindResponse> findByDosi(String dosi);
}
