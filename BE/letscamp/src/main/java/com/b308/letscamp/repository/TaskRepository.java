package com.b308.letscamp.repository;

import com.b308.letscamp.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Integer> {
    @Query("select t from Task t where t.reservation.id = :reservationId")
    List<Task> findTaskByReservationId(Long reservationId);

    @Query("select t from Task t where t.reservation.id = :reservationId and t.level = :level and t.subLevel = :sublevel")
    Task findTask(Long reservationId, int level, int sublevel);
}
