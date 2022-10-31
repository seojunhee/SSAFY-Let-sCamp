package com.b308.letscamp.repository;

import com.b308.letscamp.entity.Caraban;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarabanRepository extends JpaRepository<Caraban, Long> {
    void deleteByUserIdAndReservationId(Long userId, Long reservationId);
    List<Caraban> findByUserIdAndReservationId(Long userId, Long reservationId);
    List<Caraban> findByUserIdAndReservationIdAndLevel(Long userId, Long reservationId, Long level);
}
