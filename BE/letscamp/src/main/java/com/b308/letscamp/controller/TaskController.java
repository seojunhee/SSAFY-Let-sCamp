package com.b308.letscamp.controller;

import com.b308.letscamp.dto.task.TaskDTO;
import com.b308.letscamp.repository.TaskRepository;
import com.b308.letscamp.service.task.TaskService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
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
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @GetMapping("/{reservationId}")
    public ResponseEntity<List<TaskDTO>> getList(@ApiParam(value = "예약 Id", required = true) @PathVariable Long reservationId) {
        return new ResponseEntity<>(taskService.getTasks(reservationId), HttpStatus.OK);
    }

    @ApiOperation(value = "일정 상태 변경", notes = "해당 일정의 상태 변경")
   @GetMapping("/{reservationId}/{level}/{sublevel}")
    public ResponseEntity<Boolean> changeStatus(
            @ApiParam(value = "예약 ID", required = true) @PathVariable Long reservationId,
            @ApiParam(value = "현재 레벨", required = true) @PathVariable int level,
            @ApiParam(value = "sub 레벨", required = true) @PathVariable int sublevel
    ) {
        return new ResponseEntity<>(taskService.changeTaskStatus(reservationId, level, sublevel), HttpStatus.OK);
    }

}
