package com.b308.letscamp.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")   // 외래키
    private User user;

    @ManyToOne
    @JoinColumn(name = "camping_id")    // 외래키
    private Camping camping;

    @Column(name = "start_date", nullable = false)
    private String startDate;

    @Column(name = "end_date", nullable = false)
    private String endDate;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "count", nullable = false)
    private Long count;

    @Column(name = "level", nullable = false)
    @ColumnDefault("0")
    private Long level;
}
