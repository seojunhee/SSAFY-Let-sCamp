package com.b308.letscamp.service.user;

import com.b308.letscamp.dto.user.UserLoginRequest;
import com.b308.letscamp.dto.user.UserLoginResponse;
import com.b308.letscamp.dto.user.UserSaveRequest;

public interface UserService {
    Long create(UserSaveRequest dto);

}
