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
    private Long id;
    private Long userId;
    private Long reservationId;
    private String item;
    private boolean isCheck;
    private Long level;

    public NormalCampingFindResponse(NormalCamping normalCamping) {
        this.id = normalCamping.getId();
        this.userId = normalCamping.getUser().getId();
        this.reservationId = normalCamping.getReservation().getId();
        this.item = normalCamping.getItem();
        this.isCheck = normalCamping.isCheck();
        this.level = normalCamping.getLevel();
    }
}
