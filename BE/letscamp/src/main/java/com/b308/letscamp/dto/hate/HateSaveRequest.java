package com.b308.letscamp.dto.hate;

import com.b308.letscamp.entity.Hate;
import com.b308.letscamp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HateSaveRequest {
    private User user;
    private Long campingId;

    public Hate toEntity() {
        return Hate.builder()
                .user(user)
                .campingId(campingId)
                .build();
    }
}
