package com.b308.letscamp.controller;

import com.b308.letscamp.dto.hate.HateDeleteResponse;
import com.b308.letscamp.dto.hate.HateSaveRequest;
import com.b308.letscamp.dto.hate.HateSaveResponse;
import com.b308.letscamp.service.hate.HateService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Hate API"})
public class HateController {
    private final HateService hateService;

    @PostMapping("/hate")
    @ApiOperation(value = "싫어요 추가", notes = "싫어요 추가하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public HateSaveResponse create(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                   @RequestBody @ApiParam(value = "작성할 후기의 정보가 담긴 객체", required = true)HateSaveRequest request) {
        Long id = hateService.create(userId, request);
        return new HateSaveResponse(id);
    }

    @DeleteMapping("/hate/{id}")
    @ApiOperation(value = "싫어요 삭제", notes = "싫어요를 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public HateDeleteResponse delete(@PathVariable @ApiParam(value = "삭제할 싫어요의 ID", required = true) Long id) {
        hateService.delete(id);
        return new HateDeleteResponse(true);
    }
}
