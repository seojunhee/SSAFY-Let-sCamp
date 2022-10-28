package com.b308.letscamp.service.caraban;

import com.b308.letscamp.Exception.CarabanNotFoundException;
import com.b308.letscamp.Exception.ReservationNotFoundException;
import com.b308.letscamp.Exception.UserNotFoundException;
import com.b308.letscamp.dto.caraban.CarabanFindResponse;
import com.b308.letscamp.dto.caraban.CarabanSaveRequest;
import com.b308.letscamp.dto.caraban.CarabanUpdateRequest;
import com.b308.letscamp.dto.reservation.ReservationFindResponse;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.Caraban;
import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.CarabanRepository;
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
public class CarabanServiceImpl implements CarabanService{
    private final CarabanRepository carabanRepository;
    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;

    @Transactional
    @Override
    public Long create(String userId, Long reservationId) {
        CarabanSaveRequest dto = new CarabanSaveRequest();

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

        Optional<Reservation> reservationOptional = reservationRepository.findById(reservationId);
        if (reservationOptional.isEmpty()) {
            throw new ReservationNotFoundException();
        }
        ReservationFindResponse reservationFindResponse = reservationOptional.map(ReservationFindResponse::new).orElse(null);
        Reservation reservation = Reservation.builder()
                .id(reservationFindResponse.getId())
                .build();
        dto.setReservation(reservation);

        dto.setItem("비상약");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("모기약");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("긴팔/긴바지");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("담요");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("설거지통");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("세면도구");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("수건");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("조리도구");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("휴지");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("물티슈");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("쓰레기봉투");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("블루투스 스피커");
        dto.setLevel(1L);
        carabanRepository.save(dto.toEntity());

        dto.setItem("슬리퍼");
        dto.setLevel(1L);
        return carabanRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public void delete(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        carabanRepository.deleteByUserIdAndReservationId(userFindResponse.getId(), reservationId);
    }

    @Override
    public List<CarabanFindResponse> findByUserIdAndReservationId(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return carabanRepository.findByUserIdAndReservationId(userFindResponse.getId(), reservationId)
                .stream().map(CarabanFindResponse::new).collect(Collectors.toList());
    }

    @Override
    public List<CarabanFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return carabanRepository.findByUserIdAndReservationIdAndLevel(userFindResponse.getId(), reservationId, level)
                .stream().map(CarabanFindResponse::new).collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long update(CarabanUpdateRequest dto) {
        Caraban caraban = carabanRepository.findById(dto.getId()).orElseThrow(CarabanNotFoundException::new);
        return caraban.update(dto.isCheck()).getId();
    }
}
