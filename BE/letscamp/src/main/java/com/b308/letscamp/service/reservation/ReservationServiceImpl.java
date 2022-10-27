package com.b308.letscamp.service.reservation;

import com.b308.letscamp.Exception.UserNotFoundException;
import com.b308.letscamp.dto.reservation.ReservationFindByUserIdResponse;
import com.b308.letscamp.dto.reservation.ReservationSaveRequest;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.ReservationRepository;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public Long create(String userId, ReservationSaveRequest dto) {
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

        return reservationRepository.save(dto.toEntity()).getId();
    }

    @Override
    public List<ReservationFindByUserIdResponse> findByUserId(String userId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);
        Long id = userFindResponse.getId();
        System.out.println(reservationRepository.findByUserId(id).toString());
        return reservationRepository.findByUserId(id).stream().map(ReservationFindByUserIdResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }
}
