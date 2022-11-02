package com.b308.letscamp.dto.review;

import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.entity.Review;
import com.b308.letscamp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewSaveRequest {
    private User user;
    private Camping camping;
    private double rate;
    private String comment;
    private String date;

    public Review toEntity() {
        return Review.builder()
                .user(user)
                .camping(camping)
                .rate(rate)
                .comment(comment)
                .date(String.valueOf(LocalDate.now()))
                .build();
    }
}
