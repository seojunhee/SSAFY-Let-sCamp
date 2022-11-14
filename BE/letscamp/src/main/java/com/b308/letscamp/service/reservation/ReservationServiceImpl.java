package com.b308.letscamp.service.reservation;

import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.Task;
import com.b308.letscamp.exception.CampingNotFoundException;
import com.b308.letscamp.exception.UserNotFoundException;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.dto.reservation.ReservationFindByUserIdResponse;
import com.b308.letscamp.dto.reservation.ReservationSaveRequest;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.CampingRepository;
import com.b308.letscamp.repository.ReservationRepository;
import com.b308.letscamp.repository.TaskRepository;
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
    private final CampingRepository campingRepository;
    private final TaskRepository taskRepository;

    @Transactional
    @Override
    public Long create(String userId, Long campingId, ReservationSaveRequest dto) {
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

        Optional<Camping> campingOptional = campingRepository.findById(campingId);
        if (campingOptional.isEmpty()) {
            throw new CampingNotFoundException();
        }
        CampingFindResponse campingFindResponse = campingOptional.map(CampingFindResponse::new).orElse(null);
        Camping camping = Camping.builder()
                .id(campingFindResponse.getId())
                .name(campingFindResponse.getName())
                .simple_des(campingFindResponse.getSimple_des())
                .description(campingFindResponse.getDescription())
                .running(campingFindResponse.getRunning())
                .category(campingFindResponse.getCategory())
                .environment(campingFindResponse.getEnvironment())
                .dosi(campingFindResponse.getDosi())
                .gugun(campingFindResponse.getGugun())
                .address(campingFindResponse.getAddress())
                .lon(campingFindResponse.getLon())
                .lat(campingFindResponse.getLat())
                .tel(campingFindResponse.getTel())
                .homepage(campingFindResponse.getHomepage())
                .reserve_url(campingFindResponse.getReserve_url())
                .gramp_fac(campingFindResponse.getGramp_fac())
                .caravan_fac(campingFindResponse.getCaravan_fac())
                .running_season(campingFindResponse.getRunning_season())
                .running_day(campingFindResponse.getRunning_day())
                .sub_fac(campingFindResponse.getSub_fac())
                .sur_fac(campingFindResponse.getSur_fac())
                .exp_program(campingFindResponse.getExp_program())
                .theme(campingFindResponse.getTheme())
                .animal(campingFindResponse.getAnimal())
                .thumb(campingFindResponse.getThumb())
                .keywords(campingFindResponse.getKeywords())
                .build();
        dto.setCamping(camping);
        Reservation saveReservation = dto.toEntity();
        Long id = reservationRepository.save(saveReservation).getId();
        if (dto.getCategory().equals("일반야영장")) {
            makeCampingTask(4, new int[]{3, 5, 8, 4}, user, saveReservation);
        } else if (dto.getCategory().equals("카라반")) {
            makeCampingTask(4, new int[]{4, 3, 6, 3}, user, saveReservation);
        } else if (dto.getCategory().equals("글램핑")) {
            makeCampingTask(4, new int[]{3, 3, 6, 3}, user, saveReservation);
        } else if (dto.getCategory().equals("자동차야영장")) {
            makeCampingTask(4, new int[]{3, 5, 8, 4}, user, saveReservation);
        }
        return id;
    }

    private void makeCampingTask(int level, int[] sublevel, User user, Reservation reservation) {
        for (int i = 0; i < level; i++) {
            for (int j = 0; j < sublevel[i]; j++) {
                taskRepository.save(new Task(0, i + 1, j + 1, false, reservation, user));
            }
        }
    }

    @Override
    public List<ReservationFindByUserIdResponse> findByUserId(String userId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);
        Long id = userFindResponse.getId();
        return reservationRepository.findByUserId(id).stream().map(ReservationFindByUserIdResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }
}
