package com.b308.letscamp.repository;

import com.b308.letscamp.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByCampingId(Long campingId);
    List<Review> findByUserId(Long userId);
}
