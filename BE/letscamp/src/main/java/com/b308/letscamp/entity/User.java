package com.b308.letscamp.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "user_pw", nullable = false)
    private String userPw;

    @Column(name = "role")
    private String role;

    @Column(name = "nickName", nullable = false)
    private String nickName;

    @Column(name = "exp", nullable = false)
    @ColumnDefault("0")
    private Long exp;

    @Column(name = "address", nullable = false)
    private String address;

    @OneToMany(mappedBy = "user")
    private List<Review> review = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Reservation> reservations = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Hate> hate = new ArrayList<>();

    public User update(String nickName, String address, String userPw) {
        this.nickName = nickName;
        this.address = address;
        this.userPw = userPw;
        return this;
    }

    public User updateExp(Long exp) {
        this.exp = exp;
        return this;
    }
}
