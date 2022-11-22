package com.b308.letscamp.controller;

import com.b308.letscamp.dto.reservation.ReservationDeleteResponse;
import com.b308.letscamp.dto.reservation.ReservationFindByUserIdResponse;
import com.b308.letscamp.dto.reservation.ReservationSaveRequest;
import com.b308.letscamp.dto.reservation.ReservationSaveResponse;
import com.b308.letscamp.service.reservation.ReservationService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"Reservation API"})
public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping("/reservation/{campingId}")
    @ApiOperation(value = "예약 작성", notes = "예약를 작성하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReservationSaveResponse create(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                          @PathVariable @ApiParam(value = "Camping ID", required = true) Long campingId,
                                          @RequestBody @ApiParam(value = "작성할 예약의 정보가 담긴 객체", required = true)ReservationSaveRequest request) {
        String userId = response.getHeader("userId");
        Long resultId = reservationService.create(userId, campingId, request);
        return new ReservationSaveResponse(resultId);
    }

    @GetMapping("/reservation")
    @ApiOperation(value = "해당 유저의 예약 전체조회", notes = "해당 유저의 모든 예약 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<ReservationFindByUserIdResponse> readByUserId(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response
    ) {
        String userId = response.getHeader("userId");
        return reservationService.findByUserId(userId);
    }

    @DeleteMapping("/reservation/{reservationId}")
    @ApiOperation(value = "예약 삭제", notes = "예약을 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReservationDeleteResponse delete(@PathVariable @ApiParam(value = "삭제할 예약의 ID", required = true) Long reservationId) {
        reservationService.delete(reservationId);
        return new ReservationDeleteResponse(true);
    }
}
