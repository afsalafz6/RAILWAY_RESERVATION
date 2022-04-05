package com.train.UserService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.train.UserService.model.UserModel;
import com.train.UserService.repo.UserRepo;
import com.train.UserService.services.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserRepo userrepo;
	@Autowired
	UserService userService;
//	@Autowired
//	private BCryptPasswordEncoder bCrpytPassword;

	@GetMapping("/")
	public String home() {
		return "userhome";
	}
	
	/**
	 * Create User
	 *
	 */
	@PostMapping("/add")
	public ResponseEntity<?> addUser(@RequestBody UserModel user) {
		return userService.addUser(user);
	}

//	@PostMapping("/register")
//	public ResponseEntity<?> registerUser(@RequestBody UserModel user) {
//		String encodedPassword = bCrpytPassword.encode(user.getPassword());
//		user.setPassword(encodedPassword);
////		return usersService.registerUser(user);		
//		UserModel save = this.userrepo.save(user);
//		return ResponseEntity.ok(save);
//	}

	/**
	 * Get All Users
	 *
	 */
	@GetMapping("/getall")
	public List<UserModel> getAll() {
		return userService.getAllUsers();
	}

	/**
	 * Delete a User
	 *
	 */
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") String id) {
		return userService.deleteUser(id);
	}

	/**
	 * Get User by Id
	 *
	 */
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<?> getById(@PathVariable("id") String id) {
		return userService.getUserbyId(id);
	}


	/**
	 * Update User Profile
	 *
	 */
	@PutMapping("/update/{id}")
	public String Update(@PathVariable("id") String id, @RequestBody UserModel user) {
		return userService.updateUser(id,user);
	}

}
