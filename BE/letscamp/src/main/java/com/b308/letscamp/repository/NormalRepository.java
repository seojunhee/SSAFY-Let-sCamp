package com.b308.letscamp.repository;

import com.b308.letscamp.entity.NormalCamping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NormalRepository extends JpaRepository<NormalCamping, Long> {
    void deleteByUserIdAndReservationId(Long userId, Long reservationId);
    List<NormalCamping> findByUserIdAndReservationId(Long userId, Long reservationId);
    List<NormalCamping> findByUserIdAndReservationIdAndLevel(Long userId, Long reservationId, Long level);
}
