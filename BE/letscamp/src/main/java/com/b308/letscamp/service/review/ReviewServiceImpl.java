package com.b308.letscamp.service.review;

import com.b308.letscamp.Exception.CampingNotFoundException;
import com.b308.letscamp.Exception.ReviewNotFoundException;
import com.b308.letscamp.Exception.UserNotFoundException;
import com.b308.letscamp.dto.camping.CampingFindResponse;
import com.b308.letscamp.dto.review.ReviewFindAllResponse;
import com.b308.letscamp.dto.review.ReviewFindResponse;
import com.b308.letscamp.dto.review.ReviewSaveRequest;
import com.b308.letscamp.dto.review.ReviewUpdateRequest;
import com.b308.letscamp.dto.user.UserFindResponse;
import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.entity.Review;
import com.b308.letscamp.entity.User;
import com.b308.letscamp.repository.CampingRepository;
import com.b308.letscamp.repository.ReviewRepository;
import com.b308.letscamp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final CampingRepository campingRepository;

    @Override
    public List<ReviewFindAllResponse> findByCampingId(Long campId) {
        return reviewRepository.findByCampingId(campId).stream().map(ReviewFindAllResponse::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<ReviewFindResponse> findByUserId(String userId) {
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException();
        }
        UserFindResponse userFindResponse = userOptional.map(UserFindResponse::new).orElse(null);
        return reviewRepository.findByUserId(userFindResponse.getId()).stream().map(ReviewFindResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long create(String userId, Long campingId, ReviewSaveRequest dto) {
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

        return reviewRepository.save(dto.toEntity()).getId();
    }

    @Transactional
    @Override
    public Long update(ReviewUpdateRequest dto) {
        Review review = reviewRepository.findById(dto.getId()).orElseThrow(ReviewNotFoundException::new);
        return review.update(dto.getRate(), dto.getComment()).getId();
    }

    @Transactional
    @Override
    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }
}
