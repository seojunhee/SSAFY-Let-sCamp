package com.b308.letscamp.service.glamping;

import com.b308.letscamp.exception.GlampingNotFoundException;
import com.b308.letscamp.exception.ReservationNotFoundException;
import com.b308.letscamp.exception.UserNotFoundException;
import com.b308.letscamp.dto.glamping.GlampingFindResponse;
import com.b308.letscamp.dto.glamping.GlampingSaveRequest;
import com.b308.letscamp.dto.glamping.GlampingUpdateRequest;
import com.b308.letscamp.dto.reservation.ReservationFindResponse;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.Glamping;
import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.GlampingRepository;
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
public class GlampingServiceImpl implements GlampingService{
    private final GlampingRepository glampingRepository;
    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;

    @Transactional
    @Override
    public Long create(String userId, Long reservationId) {
        GlampingSaveRequest dto = new GlampingSaveRequest();

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

        dto.setItem("테이블");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("의자");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("비상약");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("모기약");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("긴팔/긴바지");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("담요");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("설거지통");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("세면도구");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("수건");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("조리도구");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("휴지");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("물티슈");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("쓰레기봉투");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("블루투스 스피커");
        dto.setLevel(1L);
        glampingRepository.save(dto.toEntity());

        dto.setItem("슬리퍼");
        dto.setLevel(1L);
        return glampingRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public void delete(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        glampingRepository.deleteByUserIdAndReservationId(userFindResponse.getId(), reservationId);
    }

    @Override
    public List<GlampingFindResponse> findByUserIdAndReservationId(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return glampingRepository.findByUserIdAndReservationId(userFindResponse.getId(), reservationId)
                .stream().map(GlampingFindResponse::new).collect(Collectors.toList());
    }

    @Override
    public List<GlampingFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return glampingRepository.findByUserIdAndReservationIdAndLevel(userFindResponse.getId(), reservationId, level)
                .stream().map(GlampingFindResponse::new).collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long update(GlampingUpdateRequest dto) {
        Glamping glamping = glampingRepository.findById(dto.getId()).orElseThrow(GlampingNotFoundException::new);
        return glamping.update(dto.isCheck()).getId();
    }
}
