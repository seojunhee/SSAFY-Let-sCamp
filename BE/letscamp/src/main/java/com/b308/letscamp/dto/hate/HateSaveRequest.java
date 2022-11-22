package com.b308.letscamp.dto.hate;

import com.b308.letscamp.entity.Camping;
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
    private Camping camping;

    public Hate toEntity() {
        return Hate.builder()
                .user(user)
                .camping(camping)
                .build();
    }
}
