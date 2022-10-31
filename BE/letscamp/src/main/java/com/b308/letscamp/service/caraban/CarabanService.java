package com.b308.letscamp.service.caraban;

import com.b308.letscamp.dto.caraban.CarabanFindResponse;
import com.b308.letscamp.dto.caraban.CarabanUpdateRequest;

import java.util.List;

public interface CarabanService {
    Long create(String userId, Long reservationId);
    void delete(String userId, Long reservationId);
    List<CarabanFindResponse> findByUserIdAndReservationId(String userId, Long reservationId);
    List<CarabanFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level);
    Long update(CarabanUpdateRequest dto);
}
