package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.RequestEntity;

public interface RequestRepository extends JpaRepository<RequestEntity, Integer>{

}
