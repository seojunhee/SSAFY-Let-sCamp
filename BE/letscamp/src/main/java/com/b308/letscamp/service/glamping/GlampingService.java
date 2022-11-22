package com.b308.letscamp.service.glamping;

import com.b308.letscamp.dto.glamping.GlampingFindResponse;
import com.b308.letscamp.dto.glamping.GlampingUpdateRequest;

import java.util.List;

public interface GlampingService {
    Long create(String userId, Long reservationId);
    void delete(String userId, Long reservationId);
    List<GlampingFindResponse> findByUserIdAndReservationId(String userId, Long reservationId);
    List<GlampingFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level);
    Long update(GlampingUpdateRequest dto);
}
