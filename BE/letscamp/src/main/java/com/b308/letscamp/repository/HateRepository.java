package com.b308.letscamp.repository;

import com.b308.letscamp.entity.Hate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HateRepository extends JpaRepository<Hate, Long> {
}
