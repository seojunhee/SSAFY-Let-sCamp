package com.b308.letscamp.service.user;

import com.b308.letscamp.exception.UserNotFoundException;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.dto.user.UserSaveRequest;
import com.b308.letscamp.dto.user.UserUpdateExpRequest;
import com.b308.letscamp.dto.user.UserUpdateRequest;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Transactional
    @Override
    public Long create(UserSaveRequest dto) {
        return userRepository.save(dto.toEntity()).getId();
    }

    @Override
    public UserFindResponse findByUserId(String userId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if(userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        return userOptional.map(UserFindResponse::new).orElse(null);
    }

    @Transactional
    @Override
    public Long updateExp(UserUpdateExpRequest dto) {
        User user = userRepository.findById(dto.getId()).orElseThrow(UserNotFoundException::new);
        return user.updateExp(dto.getExp()).getId();
    }

    @Override
    public boolean isDupl(String userId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if(userOptional.isEmpty()) {
            // 비었으면 중복이 아니다
            return false;
        }
        // 비어있지 않으니 중복이다.
        return true;
    }

    @Transactional
    @Override
    public Long update(UserUpdateRequest dto) {
        User user = userRepository.findById(dto.getId()).orElseThrow(UserNotFoundException::new);
        return user.update(dto.getNickName(), dto.getAddress(), dto.getUserPw()).getId();
    }


}
