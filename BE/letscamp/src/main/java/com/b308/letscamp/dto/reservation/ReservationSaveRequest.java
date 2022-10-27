package com.b308.letscamp.dto.reservation;

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
public class ReservationSaveRequest {
    private User user;
    private Long campingId;
    private String startDate;
    private String endDate;
    private String category;
    private Long count;

    public Reservation toEntity() {
        return Reservation.builder()
                .user(user)
                .campingId(campingId)
                .startDate(startDate)
                .endDate(endDate)
                .category(category)
                .count(count)
                .build();
    }
}
