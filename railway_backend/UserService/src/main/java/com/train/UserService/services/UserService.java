package com.train.UserService.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.train.UserService.model.UserModel;
import com.train.UserService.repo.UserRepo;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepo userrepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser = userrepo.findByusername(username);
		
		if(foundedUser == null) return null;
		
		String name = foundedUser.getUsername();
		String pwd = foundedUser.getPassword();
		
		return new User(name, pwd, new ArrayList<>());
	}
	
//	public UserModel getUser(String username) throws UserNotFoundException{
//		if(userrepo.findByusername(username).isEmpty()) {
//			throw new UserNotFoundException("OOPS! User does not exist!");
//		}
//		else {
//			Optional<UserModel> userget = userrepo.findByusername(username);			
//			UserModel user = userget.get();
//			return user;
//		}		
//	}
	
//	public List<UserModel>  getAllUser(){
//		List<UserModel> userget = this.userrepo.findAll();
//		return userget;	
//	}
	
	public List<UserModel> getAllUsers(){
		List<UserModel> userget = new ArrayList<>();
		userrepo.findAll().forEach(userget::add);
		return userget;
	}

	public String updateUser(String id, UserModel user) {
		System.out.println(id);
		UserModel user2 = this.userrepo.findByusername(user.getUsername());
		user2.setName(user.getName());
		user2.setAge(user.getAge());
		user2.setGender(user.getGender());
		user2.setEmail(user.getEmail());
		user2.setPhone(user.getPhone());
		this.userrepo.save(user2);
		return "User Details Successfully Updated";
	}

	public ResponseEntity<?> getUserbyId(String id) {
		return ResponseEntity.ok(this.userrepo.findById(id));
	}

	public String deleteUser(String id) {
		this.userrepo.deleteById(id);
		return "User Successfully Deleted";
	}

	public ResponseEntity<?> addUser(UserModel user) {
		UserModel save = this.userrepo.save(user);
		return ResponseEntity.ok(save);
	}

	

	
	

}
