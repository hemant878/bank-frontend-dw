package com.aurionpro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.aurionpro.entity.AdminEntity;
import com.aurionpro.repository.AdminRepository;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Repository
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;

	@Override
	public AdminEntity findAdminByUsernameAndPassword(String username, String password) {
		return adminRepository.findAdminByUsernameAndPassword(username, password);
	}

	@Override
	public AdminEntity findAdminById(int id) {
		return adminRepository.findById(id).get();
	}
}
