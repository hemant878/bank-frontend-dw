package com.aurionpro.service;

import java.util.List;

import com.aurionpro.entity.RequestEntity;

public interface RequestService {

	List<RequestEntity> findAll();

	RequestEntity save(RequestEntity request);

	void deleteById(int id);

}
