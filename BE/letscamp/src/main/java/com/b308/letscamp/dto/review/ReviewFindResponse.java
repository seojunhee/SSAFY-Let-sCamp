package com.b308.letscamp.dto.review;

import com.b308.letscamp.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewFindResponse {
    private Long id;
    private Long userId;
    private String userNickName;
    private Long userExp;
    private Long campingId;
    private String campingName;
    private String campingThumb;
    private double rate;
    private String comment;
    private String date;

    public ReviewFindResponse(Review review) {
        this.id = review.getId();
        this.userId = review.getUser().getId();
        this.userNickName = review.getUser().getNickName();
        this.userExp = review.getUser().getExp();
        this.campingId = review.getCamping().getId();
        this.campingName = review.getCamping().getName();
        this.campingThumb = review.getCamping().getThumb();
        this.rate = review.getRate();
        this.comment = review.getComment();
        this.date = review.getDate();
    }
}
