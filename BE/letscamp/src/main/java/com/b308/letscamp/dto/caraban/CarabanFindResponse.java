package com.b308.letscamp.dto.caraban;

import com.b308.letscamp.entity.CarCamping;
import com.b308.letscamp.entity.Caraban;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarabanFindResponse {
    private Long id;
    private Long userId;
    private Long reservationId;
    private String item;
    private boolean isCheck;
    private Long level;

    public CarabanFindResponse(Caraban caraban) {
        this.id = caraban.getId();
        this.userId = caraban.getUser().getId();
        this.reservationId = caraban.getReservation().getId();
        this.item = caraban.getItem();
        this.isCheck = caraban.isCheck();
        this.level = caraban.getLevel();
    }
}
