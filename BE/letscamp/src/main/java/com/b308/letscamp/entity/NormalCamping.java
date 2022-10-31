package com.b308.letscamp.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class NormalCamping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "userId")    // 외래키
    private User user;

    @ManyToOne
    @JoinColumn(name = "reservationId")
    private Reservation reservation;

    @Column(name = "item", nullable = false)
    private String item;

    @Column(name = "is_check", nullable = false)
    private boolean isCheck;

    @Column(name = "level", nullable = false)
    private Long level;

    public NormalCamping update(boolean isCheck) {
        this.isCheck = isCheck;
        return this;
    }
}
