package com.b308.letscamp.repository;

import com.b308.letscamp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserId(String userId);
}
