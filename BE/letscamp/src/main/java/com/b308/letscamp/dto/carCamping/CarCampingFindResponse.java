package com.b308.letscamp.dto.carCamping;

import com.b308.letscamp.entity.CarCamping;
import com.b308.letscamp.entity.NormalCamping;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarCampingFindResponse {
    private Long id;
    private Long userId;
    private Long reservationId;
    private String item;
    private boolean isCheck;
    private Long level;

    public CarCampingFindResponse(CarCamping carCamping) {
        this.id = carCamping.getId();
        this.userId = carCamping.getUser().getId();
        this.reservationId = carCamping.getReservation().getId();
        this.item = carCamping.getItem();
        this.isCheck = carCamping.isCheck();
        this.level = carCamping.getLevel();
    }
}