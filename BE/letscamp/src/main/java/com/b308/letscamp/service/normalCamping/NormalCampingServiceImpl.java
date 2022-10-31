package com.b308.letscamp.service.normalCamping;

import com.b308.letscamp.Exception.NormalCampingNotFoundException;
import com.b308.letscamp.Exception.ReservationNotFoundException;
import com.b308.letscamp.Exception.UserNotFoundException;
import com.b308.letscamp.dto.normalCamping.NormalCampingFindResponse;
import com.b308.letscamp.dto.normalCamping.NormalCampingSaveRequest;
import com.b308.letscamp.dto.normalCamping.NormalCampingUpdateRequest;
import com.b308.letscamp.dto.reservation.ReservationFindResponse;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.NormalCamping;
import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.NormalCampingRepository;
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
public class NormalCampingServiceImpl implements NormalCampingService {
    private final NormalCampingRepository normalRepository;
    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;

    @Transactional
    @Override
    public Long create(String userId, Long reservationId) {
        NormalCampingSaveRequest dto = new NormalCampingSaveRequest();

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

        dto.setItem("텐트");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("타프");
        dto.setLevel(3L);
        normalRepository.save(dto.toEntity());

        dto.setItem("자충매트");
        dto.setLevel(2L);
        normalRepository.save(dto.toEntity());

        dto.setItem("자충베개");
        dto.setLevel(2L);
        normalRepository.save(dto.toEntity());

        dto.setItem("테이블");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("의자");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("아이스박스");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("그릴");
        dto.setLevel(2L);
        normalRepository.save(dto.toEntity());

        dto.setItem("버너");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("부탄가스");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("숯");
        dto.setLevel(2L);
        normalRepository.save(dto.toEntity());

        dto.setItem("장작");
        dto.setLevel(3L);
        normalRepository.save(dto.toEntity());

        dto.setItem("팬");
        dto.setLevel(2L);
        normalRepository.save(dto.toEntity());

        dto.setItem("코펠");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("조명");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("화로대");
        dto.setLevel(3L);
        normalRepository.save(dto.toEntity());

        dto.setItem("선풍기");
        dto.setLevel(4L);
        normalRepository.save(dto.toEntity());

        dto.setItem("비상약");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("모기약");
        dto.setLevel(3L);
        normalRepository.save(dto.toEntity());

        dto.setItem("긴팔/긴바지");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("담요");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("이불 혹은 침낭");
        dto.setLevel(3L);
        normalRepository.save(dto.toEntity());

        dto.setItem("보조배터리");
        dto.setLevel(4L);
        normalRepository.save(dto.toEntity());

        dto.setItem("릴선");
        dto.setLevel(4L);
        normalRepository.save(dto.toEntity());

        dto.setItem("멀티탭");
        dto.setLevel(4L);
        normalRepository.save(dto.toEntity());

        dto.setItem("설거지통");
        dto.setLevel(4L);
        normalRepository.save(dto.toEntity());

        dto.setItem("세면도구");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("수건");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("조리도구");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("휴지");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("물티슈");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("쓰레기봉투");
        dto.setLevel(1L);
        normalRepository.save(dto.toEntity());

        dto.setItem("블루투스 스피커");
        dto.setLevel(4L);
        normalRepository.save(dto.toEntity());

        dto.setItem("슬리퍼");
        dto.setLevel(3L);
        return normalRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public void delete(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        normalRepository.deleteByUserIdAndReservationId(userFindResponse.getId(), reservationId);
    }

    @Override
    public List<NormalCampingFindResponse> findByUserIdAndReservationId(String userId, Long reservationId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return normalRepository.findByUserIdAndReservationId(userFindResponse.getId(), reservationId)
                .stream().map(NormalCampingFindResponse::new).collect(Collectors.toList());
    }

    @Override
    public List<NormalCampingFindResponse> findByUserIdAndReservationIdAndLevel(String userId, Long reservationId, Long level) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return normalRepository.findByUserIdAndReservationIdAndLevel(userFindResponse.getId(), reservationId, level)
                .stream().map(NormalCampingFindResponse::new).collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long update(NormalCampingUpdateRequest dto) {
        NormalCamping normalCamping = normalRepository.findById(dto.getId()).orElseThrow(NormalCampingNotFoundException::new);
        return normalCamping.update(dto.isCheck()).getId();
    }


}
