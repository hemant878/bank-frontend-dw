package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.aurionpro.entity.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, Integer>{
	
	@Query("select a from AdminEntity a where a.username=:username and a.password=:password")
	AdminEntity findAdminByUsernameAndPassword(@Param("username") String username,@Param("password") String password);
}
