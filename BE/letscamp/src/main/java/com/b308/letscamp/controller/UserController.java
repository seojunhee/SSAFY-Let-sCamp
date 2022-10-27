package com.b308.letscamp.controller;

import com.b308.letscamp.dto.review.ReviewUpdateRequest;
import com.b308.letscamp.dto.user.*;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.service.user.UserService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static javax.security.auth.message.AuthStatus.FAILURE;
import static javax.security.auth.message.AuthStatus.SUCCESS;

@RestController
@RequiredArgsConstructor
@Api(tags = {"User API"})
public class UserController {
    private final UserService userService;

    @PostMapping("/user/regist")
    @ApiOperation(value = "회원가입", notes = "회원가입 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserSaveResponse create(@RequestBody @ApiParam(value = "가입할 회원 정보가 담긴 객체", required = true) UserSaveRequest request) {
        Long id = userService.create(request);
        return new UserSaveResponse(id);
    }

    @PutMapping("/user/update")
    @ApiOperation(value = "회원정보 수정", notes = "회원정보를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserUpdateResponse update(@RequestHeader @ApiParam(value = "로그인 상태 정보", required = true) String userId,
                                     @RequestBody @ApiParam(value = "수정할 정보를 담고있는 user 객체", required = true) UserUpdateRequest request) {
        UserFindResponse user = userService.findByUserId(userId);
        request.setId(user.getId());
        Long id = userService.update(request);
        return new UserUpdateResponse(id);
    }
}
