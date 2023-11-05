package com.aurionpro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.aurionpro.entity.UserEntity;
import com.aurionpro.repository.UserRepository;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Repository
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<UserEntity> findAll() {
		return userRepository.findAll();
	}

	@Override
	public UserEntity save(UserEntity user) {
		return userRepository.save(user);
	}

	@Override
	public UserEntity findUserByUsernameAndPassword(String username, String password) {
		return userRepository.findUserByUsernameAndPassword(username, password);
	}

	@Override
	public UserEntity findById(int id) {
		return userRepository.findById(id).get();
	}
	
}
