package com.b308.letscamp.dto.user;

import com.b308.letscamp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSaveRequest {

    private String userId;
    private String userPw;
    private String nickName;
    private Long exp;
    private String address;

    public User toEntity() {
        return User.builder()
                .userId(userId)
                .userPw(userPw)
                .nickName(nickName)
                .exp(exp)
                .address(address)
                .role("USER")
                .build();
    }
}
