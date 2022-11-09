package com.b308.letscamp.controller;

import com.b308.letscamp.dto.user.*;
import com.b308.letscamp.jwt.JwtTokenProvider;
import com.b308.letscamp.jwt.TokenInfo;
import com.b308.letscamp.service.user.UserService;
import io.jsonwebtoken.ExpiredJwtException;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.concurrent.TimeUnit;

@RestController
@RequiredArgsConstructor
@Api(tags = {"User API"})
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final RedisTemplate redisTemplate;
    String tokenUserId = "userId";

    @GetMapping("/user/login/{id}/{pw}")
    public ResponseEntity<TokenInfo> login(@PathVariable String id, @PathVariable String pw) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(id, pw);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        // TODO:: RefreshToken Redis 저장

        redisTemplate.opsForValue().set(authentication.getName(), tokenInfo.getRefreshToken(), tokenInfo.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);

        return new ResponseEntity<>(tokenInfo, HttpStatus.OK);


    }

    @PostMapping("/user/regist")
    @ApiOperation(value = "회원가입", notes = "회원가입 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserSaveResponse create(@RequestBody @ApiParam(value = "가입할 회원 정보가 담긴 객체", required = true) UserSaveRequest request) {
        request.setUserPw(passwordEncoder.encode(request.getUserPw()));
        Long id = userService.create(request);
        return new UserSaveResponse(id);
    }

    @PutMapping("/user/update")
    @ApiOperation(value = "회원정보 수정", notes = "회원정보를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserUpdateResponse update(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                     @RequestBody @ApiParam(value = "수정할 정보를 담고있는 user 객체", required = true) UserUpdateRequest request) {
        String userId = response.getHeader(tokenUserId);
        UserFindResponse user = userService.findByUserId(userId);
        request.setId(user.getId());
        request.setUserPw(passwordEncoder.encode(request.getUserPw()));
        Long id = userService.update(request);
        return new UserUpdateResponse(id);
    }


    @GetMapping("/user/reissue")
    public ResponseEntity<TokenInfo> reissueTokens(@RequestHeader(name = "refresh") String refreshToken, @RequestHeader(name = "Access") String aceessToken, HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = jwtTokenProvider.getAuthentication(aceessToken);
        String dBtoken = (String) redisTemplate.opsForValue().get(authentication.getName());
        if (refreshToken == null || !dBtoken.equals(refreshToken))
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);


        try {
            jwtTokenProvider.validateToken(refreshToken);
            TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
            redisTemplate.opsForValue().set(authentication.getName(), tokenInfo.getRefreshToken(), tokenInfo.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);
            return new ResponseEntity<>(tokenInfo, HttpStatus.OK);
        } catch (ExpiredJwtException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/user/update/{exp}")
    @ApiOperation(value = "경험치 수정", notes = "경험치를 수정하는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserUpdateResponse updateExp(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response,
                                        @PathVariable @ApiParam(value = "경험치 정보", required = true) Long exp,
                                        UserUpdateExpRequest request) {
        String userId = response.getHeader(tokenUserId);
        UserFindResponse user = userService.findByUserId(userId);
        request.setId(user.getId());
        request.setExp(exp);
        Long id = userService.updateExp(request);
        return new UserUpdateResponse(id);
    }

    @GetMapping("/user/myInfo")
    @ApiOperation(value = "로그인한 유저 정보", notes = "로그인한 유저 정보 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserFindResponse read(@ApiParam(value = "유저 토큰 정보", required = true) HttpServletResponse response) {
        String userId = response.getHeader(tokenUserId);
        return userService.findByUserId(userId);
    }

    @GetMapping("/user/check/{userId}")
    @ApiOperation(value = "아이디 중복 여부", notes = "아이디 중복 여부를 확인한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserCheckResponse check(@PathVariable @ApiParam(value = "입력한 userId", required = true) String userId) {
        return new UserCheckResponse(userService.isDupl(userId));

    }
}
