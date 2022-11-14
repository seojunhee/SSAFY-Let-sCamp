package com.b308.letscamp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Data
@Getter
@ToString
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private int level;

    private int subLevel;

    private boolean done;

    @ManyToOne
    @JoinColumn(name = "reservationId")
    @JsonIgnore
    Reservation reservation;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonIgnore
    User user;

    public boolean changeStatus() {
        this.done = !this.done;
        return this.done;
    }
}
