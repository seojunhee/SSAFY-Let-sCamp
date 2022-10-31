package com.b308.letscamp.repository;

import com.b308.letscamp.entity.Hate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HateRepository extends JpaRepository<Hate, Long> {
    List<Hate> findByUserId(Long userId);
}
