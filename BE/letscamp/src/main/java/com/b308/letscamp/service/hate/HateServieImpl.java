package com.b308.letscamp.service.hate;

import com.b308.letscamp.exception.CampingNotFoundException;
import com.b308.letscamp.exception.UserNotFoundException;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.dto.hate.HateFindResponse;
import com.b308.letscamp.dto.hate.HateSaveRequest;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.CampingRepository;
import com.b308.letscamp.repository.HateRepository;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HateServieImpl implements HateService{
    private final HateRepository hateRepository;
    private final UserRepository userRepository;
    private final CampingRepository campingRepository;

    @Transactional
    @Override
    public Long create(String userId, Long campingId, HateSaveRequest dto) {
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
        if(campingOptional.isEmpty()) {
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

        return hateRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public void delete(Long id) {
        hateRepository.deleteById(id);
    }

    @Override
    public List<HateFindResponse> findByUserId(String userId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);

        return hateRepository.findByUserId(userFindResponse.getId())
                .stream().map(HateFindResponse::new).collect(Collectors.toList());
    }
}
