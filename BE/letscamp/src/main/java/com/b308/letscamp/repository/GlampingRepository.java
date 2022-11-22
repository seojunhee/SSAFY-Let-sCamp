package com.b308.letscamp.repository;

import com.b308.letscamp.entity.Glamping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GlampingRepository extends JpaRepository<Glamping, Long> {
    void deleteByUserIdAndReservationId(Long userId, Long reservationId);
    List<Glamping> findByUserIdAndReservationId(Long userId, Long reservationId);
    List<Glamping> findByUserIdAndReservationIdAndLevel(Long userId, Long reservationId, Long level);
}
