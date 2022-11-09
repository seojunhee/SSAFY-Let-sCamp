package com.b308.letscamp.dto.carcamping;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarCampingUpdateRequest {
    private Long id;
    private boolean isCheck;
}
