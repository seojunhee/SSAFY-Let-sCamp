package com.b308.letscamp.service;

import com.b308.letscamp.dto.review.ReviewFindAllResponse;
import com.b308.letscamp.dto.review.ReviewFindResponse;
import com.b308.letscamp.dto.review.ReviewSaveRequest;
import com.b308.letscamp.dto.review.ReviewUpdateRequest;

import java.util.List;

public interface ReviewService {
    List<ReviewFindAllResponse> findAll();
    ReviewFindResponse findById(Long id);
    Long create(ReviewSaveRequest dto);
    Long update(ReviewUpdateRequest dto);
    void delete(Long id);
}
