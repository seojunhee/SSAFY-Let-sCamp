package com.b308.letscamp.service.hate;

import com.b308.letscamp.dto.hate.HateFindResponse;
import com.b308.letscamp.dto.hate.HateSaveRequest;

import java.util.List;

public interface HateService {
    Long create(String userId, Long campingId, HateSaveRequest dto);
    void delete(Long id);
    List<HateFindResponse> findByUserId(String userId);
}
