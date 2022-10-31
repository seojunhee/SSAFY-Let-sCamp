package com.b308.letscamp.dto.glamping;

import com.b308.letscamp.entity.CarCamping;
import com.b308.letscamp.entity.Glamping;
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
public class GlampingSaveRequest {
    private User user;
    private Reservation reservation;
    private String item;
    private boolean isCheck;
    private long level;

    public Glamping toEntity() {
        return Glamping.builder()
                .user(user)
                .reservation(reservation)
                .item(item)
                .isCheck(false)
                .level(level)
                .build();
    }
}
