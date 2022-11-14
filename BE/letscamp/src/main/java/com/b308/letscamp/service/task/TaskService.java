package com.b308.letscamp.service.task;

import com.b308.letscamp.dto.task.TaskDTO;

import java.util.List;

public interface TaskService {
    public Boolean changeTaskStatus(Long reservationId, int level, int sublevel);
    public List<TaskDTO> getTasks(Long reservationId);
}
