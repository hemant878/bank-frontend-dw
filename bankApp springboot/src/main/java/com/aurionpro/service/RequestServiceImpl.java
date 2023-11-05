package com.aurionpro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.aurionpro.entity.RequestEntity;
import com.aurionpro.repository.RequestRepository;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Repository
public class RequestServiceImpl implements RequestService {
	
	@Autowired
	private RequestRepository requestRepository;

	@Override
	public List<RequestEntity> findAll() {
		return requestRepository.findAll();
	}

	@Override
	public RequestEntity save(RequestEntity request) {
		return requestRepository.save(request);
	}

	@Override
	public void deleteById(int id) {
		requestRepository.deleteById(id);		
	}
}
