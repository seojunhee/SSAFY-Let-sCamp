package com.b308.letscamp.dto.carcamping;

import com.b308.letscamp.entity.CarCamping;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarCampingFindResponse {
    Long id;
    Long userId;
    Long reservationId;
    String item;
    boolean isCheck;
    Long level;

    public CarCampingFindResponse(CarCamping carCamping) {
        this.id = carCamping.getId();
        this.userId = carCamping.getUser().getId();
        this.reservationId = carCamping.getReservation().getId();
        this.item = carCamping.getItem();
        this.isCheck = carCamping.isCheck();
        this.level = carCamping.getLevel();
    }
}
