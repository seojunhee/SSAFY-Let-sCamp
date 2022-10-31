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

    @ManyToOne
    @JoinColumn(name = "user_id") // 외래키
    private User user;

    @ManyToOne
    @JoinColumn(name = "camping_id") // 외래키
    private Camping camping;

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
