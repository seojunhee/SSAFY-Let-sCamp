package com.b308.letscamp.controller;

import com.b308.letscamp.dto.normalCamping.*;
import com.b308.letscamp.service.normalCamping.NormalCampingService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"NormalCamping API"})
public class NormalCampingController {
    private final NormalCampingService normalCampingService;

    @PostMapping("/normalCamping/{reservationId}")
    @ApiOperation(value = "일반 캠핑장 일정 추가", notes = "일반 캠피장 일정을 추가하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public NormalCampingSaveResponse create(HttpServletResponse response,
                                            @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        String userId = response.getHeader("userId");
        Long resultId = normalCampingService.create(userId, reservationId);
        return new NormalCampingSaveResponse(resultId);
    }

    @DeleteMapping("/normalCamping/{reservationId}")
    @ApiOperation(value = "지난 일정 삭제", notes = "지난 일정들을 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public NormalCampingDeleteResponse delete(HttpServletResponse response,
                                              @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        String userId = response.getHeader("userId");
        normalCampingService.delete(userId, reservationId);
        return new NormalCampingDeleteResponse(true);
    }

    @GetMapping("/normalCamping/{reservationId}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<NormalCampingFindResponse> readByUserIdAndReservationIdResponse(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                                                               @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        String userId = response.getHeader("userId");
        List<NormalCampingFindResponse> list = normalCampingService.findByUserIdAndReservationId(userId, reservationId);
        return list;
    }

    @GetMapping("/normalCamping/{reservationId}/{level}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<NormalCampingFindResponse> readByUserIdAndReservationIdResponseAndLevel(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                                                               @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId,
                                                                               @PathVariable @ApiParam(value = "Level", required = true) Long level) {
        String userId = response.getHeader("userId");
        List<NormalCampingFindResponse> list = normalCampingService.findByUserIdAndReservationIdAndLevel(userId, reservationId, level);
        return list;
    }

    @PutMapping("/normalCamping")
    @ApiOperation(value = "일정 체크 수정", notes = "일정 체크를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public NormalCampingUpdateResponse update(@RequestBody @ApiParam(value = "수정할 정보를 담고있는 normalCamping 객체", required = true)NormalCampingUpdateRequest request) {
        Long id = normalCampingService.update(request);
        return new NormalCampingUpdateResponse(id);
    }
}
