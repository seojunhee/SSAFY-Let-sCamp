package com.b308.letscamp.service.user;

import com.b308.letscamp.dto.user.*;

public interface UserService {
    Long create(UserSaveRequest dto);
    Long update(UserUpdateRequest dto);
    UserFindResponse findByUserId(String userId);
}
