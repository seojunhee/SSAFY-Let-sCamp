package com.b308.letscamp.service.reservation;

import com.b308.letscamp.dto.reservation.ReservationFindByUserIdResponse;
import com.b308.letscamp.dto.reservation.ReservationSaveRequest;

import java.util.List;

public interface ReservationService {
    Long create(String userId, Long campingId, ReservationSaveRequest dto);
    List<ReservationFindByUserIdResponse> findByUserId(String userId);
    void delete(Long id);
}
