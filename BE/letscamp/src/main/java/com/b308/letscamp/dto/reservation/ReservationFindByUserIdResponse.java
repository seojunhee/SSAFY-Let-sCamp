package com.b308.letscamp.dto.reservation;

import com.b308.letscamp.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationFindByUserIdResponse {
    private Long id;
    private Long userId;
    private Long campingId;
    private String startDate;
    private String endDate;
    private String category;
    private Long count;
    private Long level;

    public ReservationFindByUserIdResponse(Reservation reservation) {
        this.id = reservation.getId();
        this.userId = reservation.getUser().getId();
        this.campingId = reservation.getCamping().getId();
        this.startDate = reservation.getStartDate();
        this.endDate = reservation.getEndDate();
        this.category = reservation.getCategory();
        this.count = reservation.getCount();
        this.level = reservation.getLevel();
    }
}
