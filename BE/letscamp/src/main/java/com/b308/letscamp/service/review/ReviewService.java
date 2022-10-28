package com.b308.letscamp.service.review;

import com.b308.letscamp.dto.review.ReviewFindAllResponse;
import com.b308.letscamp.dto.review.ReviewFindResponse;
import com.b308.letscamp.dto.review.ReviewSaveRequest;
import com.b308.letscamp.dto.review.ReviewUpdateRequest;

import java.util.List;

public interface ReviewService {
    List<ReviewFindAllResponse> findByCampingId(Long campId);
    ReviewFindResponse findById(Long id);
    Long create(String userId, Long campingId, ReviewSaveRequest dto);
    Long update(ReviewUpdateRequest dto);
    void delete(Long id);
}
