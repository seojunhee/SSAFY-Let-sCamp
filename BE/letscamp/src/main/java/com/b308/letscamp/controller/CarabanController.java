package com.b308.letscamp.controller;

import com.b308.letscamp.dto.carCamping.CarCampingUpdateRequest;
import com.b308.letscamp.dto.caraban.*;
import com.b308.letscamp.entity.Caraban;
import com.b308.letscamp.service.caraban.CarabanService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Caraban API"})
public class CarabanController {
    private final CarabanService carabanService;

    @PostMapping("/caraban/{reservationId}")
    @ApiOperation(value = "카라반 일정 추가", notes = "카라반 일정을 추가하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public CarabanSaveResponse create(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                      @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        Long resultId = carabanService.create(userId, reservationId);
        return new CarabanSaveResponse(resultId);
    }

    @DeleteMapping("/caraban/{reservationId}")
    @ApiOperation(value = "지난 일정 삭제", notes = "지난 일정들을 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public CarabanDeleteResponse delete(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                        @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        carabanService.delete(userId, reservationId);
        return new CarabanDeleteResponse(true);
    }

    @GetMapping("/caraban/{reservationId}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<CarabanFindResponse> readByUserIAndReservationIdResponse(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                                                         @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        List<CarabanFindResponse> list = carabanService.findByUserIdAndReservationId(userId, reservationId);
        return list;
    }

    @GetMapping("/caraban/{reservationId}/{level}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<CarabanFindResponse> readByUserIAndReservationIdResponseAndLevel(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                                                                 @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId,
                                                                                 @PathVariable @ApiParam(value = "Level", required = true) Long level) {
        List<CarabanFindResponse> list = carabanService.findByUserIdAndReservationIdAndLevel(userId, reservationId, level);
        return list;
    }

    @PutMapping("/caraban")
    @ApiOperation(value = "일정 체크 수정", notes = "일정 체크를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public CarabanUpdateResponse update(@RequestBody @ApiParam(value = "수정할 정보를 담고있는 normalCamping 객체", required = true) CarabanUpdateRequest request) {
        Long id = carabanService.update(request);
        return new CarabanUpdateResponse(id);
    }
}
