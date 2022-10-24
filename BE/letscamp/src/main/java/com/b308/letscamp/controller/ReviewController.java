package com.b308.letscamp.controller;

import com.b308.letscamp.dto.review.*;
import com.b308.letscamp.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/review")
    public ReviewSaveResponse create(@RequestBody ReviewSaveRequest request) {
        Long id = reviewService.create(request);
        return new ReviewSaveResponse(id);
    }

    @GetMapping("/review/{id}")
    public ReviewFindResponse read(@PathVariable Long id) {
        return reviewService.findById(id);
    }

    @GetMapping("/review")
    public List<ReviewFindAllResponse> readAll() {
        List<ReviewFindAllResponse> list = reviewService.findAll();
        return list;
    }

    @PutMapping("/review")
    public ReviewUpdateResponse update(@RequestBody ReviewUpdateRequest dto) {
        Long id = reviewService.update((dto));
        return new ReviewUpdateResponse(id);
    }

    @DeleteMapping("/review/{id}")
    public ReviewDeleteResponse delete(@PathVariable Long id) {
        reviewService.delete(id);
        return new ReviewDeleteResponse(true);
    }
}
