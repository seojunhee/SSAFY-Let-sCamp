package com.b308.letscamp.controller;

import com.b308.letscamp.service.Trash.TrashService;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TrashController {
    private final TrashService trashService;

    @GetMapping("/classification/{filename}")
    public String getClassification(@ApiParam(value = "촬영한 사진 이름", required = true) @PathVariable String filename) {
        return trashService.classificationByImage(filename);
    }
}
