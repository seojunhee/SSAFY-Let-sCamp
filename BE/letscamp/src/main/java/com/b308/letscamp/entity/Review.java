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
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "camping_id", nullable = false)
    private Long campingId;

    @Column(name = "rate", nullable = false)
    private double rate;

    @Column(name = "comment", nullable = false)
    private String comment;

    public Review update(double rate, String comment) {
        this.rate = rate;
        this.comment = comment;
        return this;
    }
}
