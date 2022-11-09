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
public class ReviewFindAllResponse {
    Long id;
    Long userId;
    String userNickName;
    Long userExp;
    Long campingId;
    double rate;
    String comment;
    String date;

    public ReviewFindAllResponse(Review review) {
        this.id = review.getId();
        this.userId = review.getUser().getId();
        this.userNickName = review.getUser().getNickName();
        this.userExp = review.getUser().getExp();
        this.campingId = review.getCamping().getId();
        this.rate = review.getRate();
        this.comment = review.getComment();
        this.date = review.getDate();
    }
}
