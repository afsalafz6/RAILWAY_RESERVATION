package com.train.UserService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.train.UserService.exceptions.adminSeedingException;
import com.train.UserService.model.UserModel;
import com.train.UserService.repo.UserRepo;

@Component
public class UserDataLoader implements CommandLineRunner {

	@Autowired
	UserRepo userrepo;

	@Override
	public void run(String... args) throws Exception {
		loadUserData();

	}
	
	/**
	 * Seed admin Credential when first running this project
	 *   "actual password is admin"
	 */
	private void loadUserData() throws adminSeedingException {
		if (userrepo.count() == 0) {
			UserModel admin = new UserModel("id1", "admin", "Admin", 00, "nill", "admin@rail.com",
					"$2a$10$BrgVwctAXm5sAC6.XxJMT.8qkmb0GUARk/0Q/GVBzhsMmu6Xgg4je", 1111111111, "ADMIN");
			userrepo.save(admin);
		}

	}

}
