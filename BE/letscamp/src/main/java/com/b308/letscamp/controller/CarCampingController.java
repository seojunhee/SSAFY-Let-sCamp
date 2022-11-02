package com.b308.letscamp.controller;

import com.b308.letscamp.dto.carCamping.*;
import com.b308.letscamp.service.carCamping.CarCampingService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Api(tags = {"CarCamping API"})
public class CarCampingController {
    private final CarCampingService carCampingService;

    @PostMapping("/carCamping/{reservationId}")
    @ApiOperation(value = "자동차 캠핑장 일정 추가", notes = "자동차 캠피장 일정을 추가하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public CarCampingSaveResponse create(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
//            @RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                         @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        String userId = response.getHeader("userId");
        Long resultId = carCampingService.create(userId, reservationId);
        return new CarCampingSaveResponse(resultId);
    }

    @DeleteMapping("/carCamping/{reservationId}")
    @ApiOperation(value = "지난 일정 삭제", notes = "지난 일정들을 삭제하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public CarCampingDeleteResponse delete(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
//            @RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                           @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        String userId = response.getHeader("userId");
        carCampingService.delete(userId, reservationId);
        return new CarCampingDeleteResponse(true);
    }

    @GetMapping("/carCamping/{reservationId}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<CarCampingFindResponse> readByUserIdAndReservationIdResponse(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
//            @RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                                                            @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId) {
        String userId = response.getHeader("userId");
        List<CarCampingFindResponse> list = carCampingService.findByUserIdAndReservationId(userId, reservationId);
        return list;
    }

    @GetMapping("/carCamping/{reservationId}/{level}")
    @ApiOperation(value = "해당 예약의 전체 일정 조회", notes = "해당 예약의 일정 리스트를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public List<CarCampingFindResponse> readByUserIdAndReservationIdResponseAndLevel(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
//            @RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                                                                    @PathVariable @ApiParam(value = "Reservation ID", required = true) Long reservationId,
                                                                                    @PathVariable @ApiParam(value = "Level", required = true) Long level) {
        String userId = response.getHeader("userId");
        List<CarCampingFindResponse> list = carCampingService.findByUserIdAndReservationIdAndLevel(userId, reservationId, level);
        return list;
    }

    @PutMapping("/carCamping")
    @ApiOperation(value = "일정 체크 수정", notes = "일정 체크를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public CarCampingUpdateResponse update(@RequestBody @ApiParam(value = "수정할 정보를 담고있는 normalCamping 객체", required = true) CarCampingUpdateRequest request) {
        Long id = carCampingService.update(request);
        return new CarCampingUpdateResponse(id);
    }
}
