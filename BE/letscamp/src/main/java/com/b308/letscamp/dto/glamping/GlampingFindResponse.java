package com.b308.letscamp.dto.glamping;

import com.b308.letscamp.entity.Glamping;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GlampingFindResponse {
    Long id;
    Long userId;
    Long reservationId;
    String item;
    boolean isCheck;
    Long level;

    public GlampingFindResponse(Glamping glamping) {
        this.id = glamping.getId();
        this.userId = glamping.getUser().getId();
        this.reservationId = glamping.getReservation().getId();
        this.item = glamping.getItem();
        this.isCheck = glamping.isCheck();
        this.level = glamping.getLevel();
    }
}
