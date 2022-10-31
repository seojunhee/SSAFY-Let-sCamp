package com.b308.letscamp.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_TYPE = "Bearer";
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        // 헤더에서 JWT 를 받아옵니다.
        String token = resolveToken((HttpServletRequest) request, (HttpServletResponse) response);


        // 유효한 토큰인지 확인합니다.
        if (token != null && jwtTokenProvider.validateToken(token)) {
            // 토큰이 유효하면 토큰으로부터 유저 정보를 받아옵니다.
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            // SecurityContext 에 Authentication 객체를 저장합니다.
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        chain.doFilter(request, response);
    }
    // Request Header 에서 토큰 정보 추출
    private String resolveToken(HttpServletRequest request, HttpServletResponse response) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String s = new String(
                    Base64.getDecoder().decode(bearerToken.split("\\.")[1]));
            HashMap<String, Object> map = objectMapper.readValue(s, HashMap.class);
            response.setHeader("userId",(String) map.get("sub"));
        }catch(Exception e){

        }

        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_TYPE)) {
            return bearerToken.substring(7);
        }
        return bearerToken;
    }
}