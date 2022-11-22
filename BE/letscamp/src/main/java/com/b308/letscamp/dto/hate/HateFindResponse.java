package com.b308.letscamp.dto.hate;

import com.b308.letscamp.entity.Hate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HateFindResponse {
    Long id;
    Long userId;
    Long campingId;

    public HateFindResponse(Hate hate) {
        this.id = hate.getId();
        this.userId = hate.getUser().getId();
        this.campingId = hate.getCamping().getId();
    }
}
