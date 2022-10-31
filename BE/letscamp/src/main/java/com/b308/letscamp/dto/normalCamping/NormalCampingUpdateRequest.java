package com.b308.letscamp.dto.normalCamping;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NormalCampingUpdateRequest {
    private Long id;
    private boolean isCheck;
}