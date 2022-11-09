package com.b308.letscamp.dto.normalcamping;

import com.b308.letscamp.entity.NormalCamping;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NormalCampingFindResponse {
    Long id;
    Long userId;
    Long reservationId;
    String item;
    boolean isCheck;
    Long level;

    public NormalCampingFindResponse(NormalCamping normalCamping) {
        this.id = normalCamping.getId();
        this.userId = normalCamping.getUser().getId();
        this.reservationId = normalCamping.getReservation().getId();
        this.item = normalCamping.getItem();
        this.isCheck = normalCamping.isCheck();
        this.level = normalCamping.getLevel();
    }
}
