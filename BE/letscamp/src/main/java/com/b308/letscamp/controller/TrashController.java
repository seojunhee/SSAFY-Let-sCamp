package com.b308.letscamp.controller;

import com.b308.letscamp.dto.trash.TrashFindResponse;
import com.b308.letscamp.service.Trash.TrashService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TrashController {
    private final TrashService trashService;

    @GetMapping("/classification/{filename}")
    @ApiOperation(value = "해당 사진의 분류 결과", notes = "해당 사진의 분류 결과를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public TrashFindResponse getClassification(@ApiParam(value = "촬영한 사진 이름", required = true) @PathVariable String filename) {
        String result = trashService.classificationByImage(filename).substring(1, trashService.classificationByImage(filename).length() - 1);
        return new TrashFindResponse(result);
    }
}
