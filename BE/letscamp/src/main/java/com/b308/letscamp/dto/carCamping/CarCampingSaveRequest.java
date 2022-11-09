package com.b308.letscamp.dto.carCamping;

import com.b308.letscamp.entity.CarCamping;
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
public class CarCampingSaveRequest {
    private User user;
    private Reservation reservation;
    private String item;
    private long level;

    public CarCamping toEntity() {
        return CarCamping.builder()
                .user(user)
                .reservation(reservation)
                .item(item)
                .isCheck(false)
                .level(level)
                .build();
    }
}
