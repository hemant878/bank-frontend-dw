package com.aurionpro.service;

import com.aurionpro.entity.AdminEntity;

public interface AdminService {

	AdminEntity findAdminByUsernameAndPassword(String username, String password);

	AdminEntity findAdminById(int id);

}
