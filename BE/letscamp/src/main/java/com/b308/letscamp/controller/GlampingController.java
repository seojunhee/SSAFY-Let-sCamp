package com.b308.letscamp.controller;

import com.b308.letscamp.dto.caraban.CarabanUpdateRequest;
import com.b308.letscamp.dto.glamping.*;
import com.b308.letscamp.service.glamping.GlampingService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Glamping API"})
public class GlampingController {
    private final GlampingService glampingService;

    @PostMapping("/glamping/{reservationId}")
    @ApiOperation(value = "글램핑 일정 추가", notes = "글램핑 일정을 추가하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public GlampingSaveResponse create(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                       @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        Long resultId = glampingService.create(userId, reservationId);
        return new GlampingSaveResponse(resultId);
    }

    @DeleteMapping("/glamping/{reservationId}")
    @ApiOperation(value = "지난 일정 삭제", notes = "지난 일정들을 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public GlampingDeleteResponse delete(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                         @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        glampingService.delete(userId, reservationId);
        return new GlampingDeleteResponse(true);
    }

    @GetMapping("/glamping/{reservationId}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<GlampingFindResponse> readByUserIdAndReservationIdResponse(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                                                          @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        List<GlampingFindResponse> list = glampingService.findByUserIdAndReservationId(userId, reservationId);
        return list;
    }

    @GetMapping("/glamping/{reservationId}/{level}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<GlampingFindResponse> readByUserIdAndReservationIdResponseAndLevel(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                                                                  @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId,
                                                                                  @PathVariable @ApiParam(value = "Level", required = true) Long level) {
        List<GlampingFindResponse> list = glampingService.findByUserIdAndReservationIdAndLevel(userId, reservationId, level);
        return list;
    }

    @PutMapping("/glamping")
    @ApiOperation(value = "일정 체크 수정", notes = "일정 체크를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public GlampingUpdateResponse update(@RequestBody @ApiParam(value = "수정할 정보를 담고있는 normalCamping 객체", required = true) GlampingUpdateRequest request) {
        Long id = glampingService.update(request);
        return new GlampingUpdateResponse(id);
    }
}