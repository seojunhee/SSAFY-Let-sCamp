package com.b308.letscamp.controller;

import com.b308.letscamp.dto.review.*;
import com.b308.letscamp.service.review.ReviewService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Review API"})
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/review/{campingId}")
    @ApiOperation(value = "후기 작성", notes = "후기를 작성하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReviewSaveResponse create(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                     @PathVariable @ApiParam(value = "Camping ID", required = true) Long campingId,
                                     @RequestBody @ApiParam(value = "작성할 후기의 정보가 담긴 객체", required = true) ReviewSaveRequest request) {
        String userId = response.getHeader("userId");
        Long resultId = reviewService.create(userId, campingId, request);
        return new ReviewSaveResponse(resultId);
    }

    @GetMapping("/review/user")
    @ApiOperation(value = "로그인한 유저의 후기 리스트 조회", notes = "로그인한 유저의 후기 리스트 정보를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<ReviewFindResponse> readByUserId(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response) {
        String userId = response.getHeader("userId");
        return reviewService.findByUserId(userId);
    }

    @GetMapping("/review/{campingId}")
    @ApiOperation(value = "해당 캠프의 후기 전체조회", notes = "모든 후기 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<ReviewFindAllResponse> readByCampingId(@PathVariable @ApiParam(value = "Camping ID", required = true) Long campingId) {
        return reviewService.findByCampingId(campingId);
    }

    @PutMapping("/review")
    @ApiOperation(value = "후기 수정", notes = "후기를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReviewUpdateResponse update(@RequestBody @ApiParam(value = "수정할 정보를 담고있는 review 객체", required = true) ReviewUpdateRequest request) {
        Long id = reviewService.update((request));
        return new ReviewUpdateResponse(id);
    }

    @DeleteMapping("/review/{id}")
    @ApiOperation(value = "후기 삭제", notes = "후기를 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReviewDeleteResponse delete(@PathVariable @ApiParam(value = "삭제할 후기의 ID", required = true) Long id) {
        reviewService.delete(id);
        return new ReviewDeleteResponse(true);
    }
}
