package com.expenzo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expenzo.model.User;
import com.expenzo.service.UserService;
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User createUser(@RequestBody User user) {

      user.setPassword(passwordEncoder.encode(user.getPassword()));
      return userService.save(user);
    }

    @GetMapping("/getAll")
    public List<User> getAll(){
      List<User> us = userService.getAll();
      System.out.println(us);
      return us;
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getByEmail(email);
    }
}