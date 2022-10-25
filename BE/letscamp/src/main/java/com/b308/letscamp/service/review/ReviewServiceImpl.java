package com.b308.letscamp.service.review;

import com.b308.letscamp.Exception.ReviewNotFoundException;
import com.b308.letscamp.dto.review.ReviewFindAllResponse;
import com.b308.letscamp.dto.review.ReviewFindResponse;
import com.b308.letscamp.dto.review.ReviewSaveRequest;
import com.b308.letscamp.dto.review.ReviewUpdateRequest;
import com.b308.letscamp.entity.Review;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.ReviewRepository;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;

    @Override
    public List<ReviewFindAllResponse> findAll() {
        return reviewRepository.findAll().stream().map(ReviewFindAllResponse::new)
                .collect(Collectors.toList());
    }

    @Override
    public ReviewFindResponse findById(Long id) {
        Optional<Review> reviewOptional = reviewRepository.findById(id);
        if(reviewOptional.isEmpty()) {
            throw new ReviewNotFoundException();
        }
        return reviewOptional.map(ReviewFindResponse::new).orElse(null);
    }

    @Transactional
    @Override
    public Long create(String userId, ReviewSaveRequest dto) {
        User user = userRepository.findByUserId(userId);

        dto.setUser(user);

        return reviewRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public Long update(ReviewUpdateRequest dto) {
        Review review = reviewRepository.findById(dto.getId()).orElseThrow(ReviewNotFoundException::new);
        return review.update(dto.getRate(), dto.getComment()).getId();
    }

    @Transactional
    @Override
    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }
}
