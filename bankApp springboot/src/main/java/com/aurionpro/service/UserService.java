package com.aurionpro.service;

import java.util.List;

import com.aurionpro.entity.UserEntity;

public interface UserService {

	List<UserEntity> findAll();

	UserEntity save(UserEntity user);

	UserEntity findUserByUsernameAndPassword(String username, String password);

	UserEntity findById(int id);

}
