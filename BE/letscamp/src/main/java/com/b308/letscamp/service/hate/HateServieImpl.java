package com.b308.letscamp.service.hate;

import com.b308.letscamp.Exception.UserNotFoundException;
import com.b308.letscamp.dto.hate.HateSaveRequest;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.HateRepository;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HateServieImpl implements HateService{
    private final HateRepository hateRepository;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public Long create(String userId, HateSaveRequest dto) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);
        User user = User.builder()
                .id(userFindResponse.getId())
                .userId(userFindResponse.getUserId())
                .userPw(userFindResponse.getUserPw())
                .nickName(userFindResponse.getNickName())
                .exp(userFindResponse.getExp())
                .address(userFindResponse.getAddress())
                .build();
        dto.setUser(user);

        return hateRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public void delete(Long id) {
        hateRepository.deleteById(id);
    }
}
