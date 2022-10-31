package com.b308.letscamp.repository;

import com.b308.letscamp.entity.CarCamping;
import com.b308.letscamp.entity.NormalCamping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarCampingRepository extends JpaRepository<CarCamping, Long> {
    void deleteByUserIdAndReservationId(Long userId, Long reservationId);
    List<CarCamping> findByUserIdAndReservationId(Long userId, Long reservationId);
    List<CarCamping> findByUserIdAndReservationIdAndLevel(Long userId, Long reservationId, Long level);
}
