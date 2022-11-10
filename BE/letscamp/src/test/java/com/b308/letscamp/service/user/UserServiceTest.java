package com.b308.letscamp.service.user;

import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.dto.user.UserSaveRequest;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UserServiceTest {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Test
    void create() { // 회원가입
        // given
        UserSaveRequest user = UserSaveRequest.builder()
                .userId("testest")
                .userPw("testest")
                .nickName("테스트스트")
                .address("대전")
                .exp(0L)
                .build();

        // when
        Long saveId = userService.create(user);

        // then
        Optional<User> findUser = userRepository.findById(saveId);
        assertEquals(findUser.map(UserFindResponse::new).orElse(null).getUserId(), "testest");
    }
}