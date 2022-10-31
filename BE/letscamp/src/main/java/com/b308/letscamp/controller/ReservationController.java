package com.b308.letscamp.controller;

import com.b308.letscamp.dto.reservation.ReservationDeleteResponse;
import com.b308.letscamp.dto.reservation.ReservationFindByUserIdResponse;
import com.b308.letscamp.dto.reservation.ReservationSaveRequest;
import com.b308.letscamp.dto.reservation.ReservationSaveResponse;
import com.b308.letscamp.service.reservation.ReservationService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Reservation API"})
public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping("/reservation")
    @ApiOperation(value = "예약 작성", notes = "예약를 작성하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReservationSaveResponse create(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                          @RequestBody @ApiParam(value = "작성할 예약의 정보가 담긴 객체", required = true)ReservationSaveRequest request) {
        Long id = reservationService.create(userId, request);
        return new ReservationSaveResponse(id);
    }

    @GetMapping("/reservation")
    @ApiOperation(value = "해당 유저의 예약 전체조회", notes = "해당 유저의 모든 예약 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<ReservationFindByUserIdResponse> readByUserId(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId) {
        List<ReservationFindByUserIdResponse> list = reservationService.findByUserId(userId);
        return list;
    }

    @DeleteMapping("/reservation/{id}")
    @ApiOperation(value = "예약 삭제", notes = "예약을 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReservationDeleteResponse delete(@PathVariable @ApiParam(value = "삭제할 예약의 ID", required = true) Long id) {
        reservationService.delete(id);
        return new ReservationDeleteResponse(true);
    }
}
