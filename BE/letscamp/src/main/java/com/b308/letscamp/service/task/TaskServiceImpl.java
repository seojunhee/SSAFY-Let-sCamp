package com.b308.letscamp.service.task;

import com.b308.letscamp.dto.task.TaskDTO;
import com.b308.letscamp.entity.Task;
import com.b308.letscamp.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Override
    public Boolean changeTaskStatus(Long reservationId, int level, int sublevel) {
        Task task = taskRepository.findTask(reservationId, level, sublevel);
        return task.changeStatus();
    }

    @Override
    public List<TaskDTO> getTasks(Long reservationId) {
        return taskRepository.findTaskByReservationId(reservationId).stream().map(t -> new TaskDTO(reservationId, t.getLevel(), t.getSubLevel(),t.isDone())).collect(Collectors.toList());
    }
}
