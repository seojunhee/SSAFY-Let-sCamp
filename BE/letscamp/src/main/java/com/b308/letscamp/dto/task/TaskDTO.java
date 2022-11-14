package com.b308.letscamp.dto.task;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class TaskDTO {
    long reservationId;
    int level;
    int sublevel;
    boolean done;
}
