package com.b308.letscamp.controller;

import com.b308.letscamp.dto.hate.HateDeleteResponse;
import com.b308.letscamp.dto.hate.HateFindResponse;
import com.b308.letscamp.dto.hate.HateSaveRequest;
import com.b308.letscamp.dto.hate.HateSaveResponse;
import com.b308.letscamp.service.hate.HateService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Hate API"})
public class HateController {
    private final HateService hateService;

    @PostMapping("/hate/{id}")
    @ApiOperation(value = "싫어요 추가", notes = "싫어요 추가하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public HateSaveResponse create(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                   @RequestBody @ApiParam(value = "작성할 후기의 정보가 담긴 객체", required = true)HateSaveRequest request,
                                   @PathVariable @ApiParam(value = "Camping ID", required = true) Long id) {
        String userId = response.getHeader("userId");
        Long resultId = hateService.create(userId, id, request);
        return new HateSaveResponse(resultId);
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

    @GetMapping("/hate")
    @ApiOperation(value = "로그인한 아이디의 싫어요 조회", notes = "로그인한 아이디의 싫어요 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<HateFindResponse> readByUserId(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response) {
        String userId = response.getHeader("userId");
        return hateService.findByUserId(userId);
    }
}
