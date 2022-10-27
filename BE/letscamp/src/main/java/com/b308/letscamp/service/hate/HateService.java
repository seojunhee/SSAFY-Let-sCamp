package com.b308.letscamp.service.hate;

import com.b308.letscamp.dto.hate.HateSaveRequest;

public interface HateService {
    Long create(String userId, HateSaveRequest dto);
    void delete(Long id);
}
