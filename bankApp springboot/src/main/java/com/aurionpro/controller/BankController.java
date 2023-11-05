package com.aurionpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.entity.UserEntity;
import com.aurionpro.service.UserService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RestController
@RequestMapping("/bank")
@CrossOrigin("http://localhost:4200")
public class BankController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/addUser")
	public UserEntity addUser(@RequestBody UserEntity user){
		return userService.save(user);
	}
	
	@GetMapping("/user/username/{username}/password/{password}")
	public UserEntity findUserByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
		UserEntity user = userService.findUserByUsernameAndPassword(username, password);
		return user;
	}
	
	@GetMapping("/user/{id}")
	public UserEntity findById(@PathVariable int id){
		UserEntity user = userService.findById(id);
		return user;
	}
	
	@GetMapping("/users")
	public List<UserEntity> getAllUsers(){
		List<UserEntity> allUsers = userService.findAll();
		return allUsers;
	}
}
