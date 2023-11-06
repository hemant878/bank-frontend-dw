package com.aurionpro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.entity.AdminEntity;
import com.aurionpro.service.AdminService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RestController
@RequestMapping("/bank")
@CrossOrigin("http://localhost:4200")
public class AdminControllerPage {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/admin/username/{username}/password/{password}")
	public AdminEntity findAdminByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
		AdminEntity admin = adminService.findAdminByUsernameAndPassword(username, password);
		return admin;
	}
	
	@GetMapping("/admin/{id}")
	public AdminEntity findAdminById(@PathVariable int id){
		AdminEntity admin = adminService.findAdminById(id);
		return admin;
	}
}
