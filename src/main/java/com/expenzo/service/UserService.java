package com.expenzo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.expenzo.model.User;
import com.expenzo.repository.UserRepository;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public List<User> getAll(){
      return userRepository.findAll();
    }
    public User getByEmail(String email) {
    Optional<User> u = userRepository.findByEmail(email);
    return u.orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
}

}