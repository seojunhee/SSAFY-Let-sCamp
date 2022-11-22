package com.b308.letscamp.service.normalcamping;

import com.b308.letscamp.dto.normalcamping.NormalCampingFindResponse;
import com.b308.letscamp.dto.normalcamping.NormalCampingUpdateRequest;

import java.util.List;

public interface NormalCampingService {
    Long create(String userId, Long reservationId);
    void delete(String userId, Long reservationId);
    List<NormalCampingFindResponse> findByUserIdAndReservationId(String userId, Long reservationId);
    List<NormalCampingFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level);
    Long update(NormalCampingUpdateRequest dto);
}
