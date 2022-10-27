package com.b308.letscamp.advice;

import com.b308.letscamp.Exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class UserControllerAdvice {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> userNotFoundHandle() {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
