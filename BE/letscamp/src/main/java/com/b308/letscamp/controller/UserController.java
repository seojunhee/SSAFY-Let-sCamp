package com.b308.letscamp.controller;

import com.b308.letscamp.dto.user.UserLoginRequest;
import com.b308.letscamp.dto.user.UserSaveRequest;
import com.b308.letscamp.dto.user.UserSaveResponse;
import com.b308.letscamp.service.user.UserService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

}
