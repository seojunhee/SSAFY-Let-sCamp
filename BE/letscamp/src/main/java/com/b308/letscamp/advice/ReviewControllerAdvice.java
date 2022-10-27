package com.b308.letscamp.advice;

import com.b308.letscamp.Exception.ReviewNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class ReviewControllerAdvice {
    @ExceptionHandler(ReviewNotFoundException.class)
    public ResponseEntity<String> reviewNotFoundHandle() {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
