package com.b308.letscamp.service.carCamping;

import com.b308.letscamp.dto.carCamping.CarCampingFindResponse;
import com.b308.letscamp.dto.carCamping.CarCampingUpdateRequest;

import java.util.List;

public interface CarCampingService {
    Long create(String userId, Long reservationId);
    void delete(String userId, Long reservationId);
    List<CarCampingFindResponse> findByUserIdAndReservationId(String userId, Long reservationId);
    List<CarCampingFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level);
    Long update(CarCampingUpdateRequest dto);
}
