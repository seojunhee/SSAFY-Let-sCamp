package com.b308.letscamp.controller;

import com.b308.letscamp.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(HateController.class)
@ComponentScan(basePackages = {"com.b308.letscamp.config", "com.b308.letscamp.jwt"})
class HateControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    @WithMockUser(username = "q", roles = "USER")
    void readByUserId() throws Exception {
        //then
        //MockMvc를 통해 /hate 주소로 GET 요청
        mvc.perform(get("/hate").queryParam( "lang", "ko" ).header("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2ODA0MzA4Mn0.r8j3TnS9VdALo3C9NXCMWwtszP8tGvdD3zZWaFWlfbI"))
                //mvc.perform()의 결과를 검증
                .andExpect(status().isOk()); //200 상태
    }
}