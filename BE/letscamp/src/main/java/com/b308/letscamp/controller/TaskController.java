package com.b308.letscamp.controller;

import com.b308.letscamp.dto.task.TaskDTO;
import com.b308.letscamp.repository.TaskRepository;
import com.b308.letscamp.service.task.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/task")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/{reservationId}")
    public ResponseEntity<List<TaskDTO>> getList(@PathVariable Long reservationId) {
        return new ResponseEntity<>(taskService.getTasks(reservationId), HttpStatus.OK);
    }

    @GetMapping("/{reservationId}/{level}/{sublevel}")
    public ResponseEntity<Boolean> changeStatus(@PathVariable Long reservationId, @PathVariable int level, @PathVariable int sublevel) {
        return new ResponseEntity<>(taskService.changeTaskStatus(reservationId, level, sublevel), HttpStatus.OK);
    }

}
