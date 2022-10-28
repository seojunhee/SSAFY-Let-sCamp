package com.b308.letscamp.dto.caraban;

import com.b308.letscamp.entity.CarCamping;
import com.b308.letscamp.entity.Caraban;
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
public class CarabanSaveRequest {
    private User user;
    private Reservation reservation;
    private String item;
    private boolean isCheck;
    private long level;

    public Caraban toEntity() {
        return Caraban.builder()
                .user(user)
                .reservation(reservation)
                .item(item)
                .isCheck(false)
                .level(level)
                .build();
    }
}
