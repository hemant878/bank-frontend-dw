package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.AccountsEntity;

public interface AccountsRepository extends JpaRepository<AccountsEntity, Integer>{

}
