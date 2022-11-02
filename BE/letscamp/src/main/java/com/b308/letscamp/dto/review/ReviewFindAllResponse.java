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
    private Long id;
    private Long userId;
    private String userNickName;
    private Long campingId;
    private double rate;
    private String comment;

    public ReviewFindAllResponse(Review review) {
        this.id = review.getId();
        this.userId = review.getUser().getId();
        this.userNickName = review.getUser().getNickName();
        this.campingId = review.getCamping().getId();
        this.rate = review.getRate();
        this.comment = review.getComment();
    }
}
