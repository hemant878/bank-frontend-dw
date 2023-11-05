package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.aurionpro.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer>{

	@Query("select u from UserEntity u where u.username=:username and u.password=:password")
	public UserEntity findUserByUsernameAndPassword(@Param("username") String username,@Param("password") String password);

}
