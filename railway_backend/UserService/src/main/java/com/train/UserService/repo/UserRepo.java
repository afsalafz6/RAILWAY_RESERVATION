package com.train.UserService.repo;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.train.UserService.model.UserModel;

public interface UserRepo extends MongoRepository<UserModel, String> {

	UserModel findByusername(String username);

}
