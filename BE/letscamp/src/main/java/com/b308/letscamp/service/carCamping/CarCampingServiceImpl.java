package com.b308.letscamp.service.carCamping;

import com.b308.letscamp.Exception.CarCampingNotFoundException;
import com.b308.letscamp.Exception.ReservationNotFoundException;
import com.b308.letscamp.Exception.UserNotFoundException;
import com.b308.letscamp.dto.carCamping.CarCampingFindResponse;
import com.b308.letscamp.dto.carCamping.CarCampingSaveRequest;
import com.b308.letscamp.dto.carCamping.CarCampingUpdateRequest;
import com.b308.letscamp.dto.reservation.ReservationFindResponse;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.CarCamping;
import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.CarCampingRepository;
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
public class CarCampingServiceImpl implements CarCampingService{
    private final CarCampingRepository carCampingRepository;
    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;

    @Transactional
    @Override
    public Long create(String userId, Long reservationId) {
        CarCampingSaveRequest dto = new CarCampingSaveRequest();

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

        dto.setItem("차박용 텐트");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("차량 평탄화 매트");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("자충베개 혹은 베개");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("이불 혹은 침낭");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("차량용 냉장고");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("테이블");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("의자");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("그릴");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("버너");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("부탄가스");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("숯");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("장작");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("팬");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("코펠");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("조면");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("화로대");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("선풍기");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("비상약");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("모기약");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("기팔/긴바지");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("담요");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("보조배터리");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("설거지통");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("세면도구");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("수건");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("조리도구");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("휴지");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("물티슈");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("쓰레기봉투");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("블루투스 스피커");
        dto.setLevel(1L);
        carCampingRepository.save(dto.toEntity());

        dto.setItem("슬리퍼");
        dto.setLevel(1L);
        return carCampingRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public void delete(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        carCampingRepository.deleteByUserIdAndReservationId(userFindResponse.getId(), reservationId);
    }

    @Override
    public List<CarCampingFindResponse> findByUserIdAndReservationId(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return carCampingRepository.findByUserIdAndReservationId(userFindResponse.getId(), reservationId)
                .stream().map(CarCampingFindResponse::new).collect(Collectors.toList());
    }

    @Override
    public List<CarCampingFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return carCampingRepository.findByUserIdAndReservationIdAndLevel(userFindResponse.getId(), reservationId, level)
                .stream().map(CarCampingFindResponse::new).collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long update(CarCampingUpdateRequest dto) {
        CarCamping carCamping = carCampingRepository.findById(dto.getId()).orElseThrow(CarCampingNotFoundException::new);
        return carCamping.update(dto.isCheck()).getId();
    }
}
