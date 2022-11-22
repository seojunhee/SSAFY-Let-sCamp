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
public class UserFindResponse {
    Long id;
    String userId;
    String userPw;
    String nickName;
    Long exp;
    String address;

    public UserFindResponse(User user) {
        this.id = user.getId();
        this.userId = user.getUserId();
        this.userPw = user.getUserPw();
        this.nickName = user.getNickName();
        this.exp = user.getExp();
        this.address = user.getAddress();
    }
}
