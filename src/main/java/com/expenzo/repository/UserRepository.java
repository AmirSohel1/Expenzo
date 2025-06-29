package com.expenzo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expenzo.model.User;
public interface UserRepository extends JpaRepository<User, Long> {
    // User findByEmail1(String email); 
    Optional<User> findByEmail(String email); 
}
