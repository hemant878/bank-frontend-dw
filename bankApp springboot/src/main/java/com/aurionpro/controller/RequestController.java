package com.aurionpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.entity.RequestEntity;
import com.aurionpro.service.RequestService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RestController
@RequestMapping("/bank")
@CrossOrigin("http://localhost:4200")
public class RequestController {
	
	@Autowired
	private RequestService requestService;
	
	@GetMapping("/requests")
	public List<RequestEntity> getAllRequests(){
		List<RequestEntity> requests = requestService.findAll();
		return requests;
	}
	
	@PostMapping("/requests")
	public RequestEntity addNewRequests(@RequestBody RequestEntity request) {
		return requestService.save(request);
	}
	
	@DeleteMapping("/requests/{id}")
	public void deleteInstructorById(@PathVariable int id) {
		requestService.deleteById(id);
	}
}
