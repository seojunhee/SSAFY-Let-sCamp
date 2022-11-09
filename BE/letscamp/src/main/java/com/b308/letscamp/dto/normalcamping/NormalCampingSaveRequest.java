package com.b308.letscamp.dto.normalcamping;

import com.b308.letscamp.entity.NormalCamping;
import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NormalCampingSaveRequest {
    private User user;
    private Reservation reservation;
    private String item;
    private boolean isCheck;
    private long level;

    public NormalCamping toEntity() {
        return NormalCamping.builder()
                .user(user)
                .reservation(reservation)
                .item(item)
                .isCheck(false)
                .level(level)
                .build();
    }
}
