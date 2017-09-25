package com.springboot.manager.service;

import java.util.List;

import com.springboot.manager.domain.User;


public interface IUserService {

	List<User> query(User user);
	
	int add(User user);

	int delete(int ... userId);
	
	int update(User user);
	
	
}
