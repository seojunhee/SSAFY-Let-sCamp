package com.b308.letscamp.service.user;

import com.b308.letscamp.dto.user.UserSaveRequest;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Transactional
    @Override
    public Long create(UserSaveRequest dto) {
        return userRepository.save(dto.toEntity()).getId();
    }


}
