package com.b308.letscamp.controller;

import com.b308.letscamp.repository.UserRepository;
import com.b308.letscamp.service.hate.HateService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.redis.AutoConfigureDataRedis;
import org.springframework.boot.test.autoconfigure.data.redis.DataRedisTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@ExtendWith(SpringExtension.class)
//@WebMvcTest(HateController.class)
//@ComponentScan(basePackages = {"com.b308.letscamp.config", "com.b308.letscamp.jwt"})
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class HateControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private HateService hateService;

    @Test
    @WithMockUser(username = "q", roles = "USER")
    void readByUserId() throws Exception {
        //then
        //MockMvc를 통해 /hate 주소로 GET 요청
        mockMvc.perform(get("/hate").queryParam("lang", "ko").header("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzc2FmeSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NjgwNjgxMzB9.E5CdB5bs-0Cg8e57m3TMI5fBz80C5oMBOt9-C7bT2_U"))
                //mvc.perform()의 결과를 검증
                .andExpect(status().isOk()); //200 상태

    }
}