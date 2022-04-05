package com.train.UserService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.train.UserService.model.AuthenticationRequest;
import com.train.UserService.model.AuthenticationResponse;
import com.train.UserService.model.UserModel;
import com.train.UserService.repo.UserRepo;
import com.train.UserService.services.UserService;
import com.train.UserService.utils.JwtUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {

	@Autowired
	private UserRepo userrepo;
	
	@Autowired
	private AuthenticationManager authenticationmanager;
	
	@Autowired
	private UserService userservice;
	
	@Autowired
	private JwtUtil jwtUtils;
	
	@GetMapping("/dashboard")
	private String testingToken() {
		return "Welcome to DASHBOARD "+ SecurityContextHolder.getContext().getAuthentication().getName();
	}

	/**
	 * Register User with all Details according to UserModel
	 *
	 */
	@PostMapping("/subs")
	private ResponseEntity<?> SubscribeClient(@RequestBody UserModel authRequest) {

		String username = authRequest.getUsername();
		String password = authRequest.getPassword();
		String email = authRequest.getEmail();
		
		
		UserModel user = new UserModel();
		user.setUsername(username);
//		user.setPassword(password);
		user.setPassword(new BCryptPasswordEncoder().encode(password));
		user.setName(authRequest.getName());
		user.setAge(authRequest.getAge());
		user.setGender(authRequest.getGender());
		user.setEmail(email);
		user.setPhone(authRequest.getPhone());
		user.setRole(authRequest.getRole());
		

		try {
			userrepo.save(user);
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error While Saving User:" + username));
		}

		return ResponseEntity.ok(new AuthenticationResponse("User Successfully Registered :" + username));
	}

//	@PostMapping("/auth")
//	private ResponseEntity<?> AuthenticateClient(@RequestBody AuthenticationRequest authRequest) {
//
//		String username = authRequest.getUsername();
//		String password = authRequest.getPassword();
//		
//		try {
//			authenticationmanager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
//		} catch (Exception e) {
//			return ResponseEntity.ok(new AuthenticationResponse("Error While Authentication User: :" + username));
//		}
//		
//		
//		
//		return ResponseEntity.ok(new AuthenticationResponse("User Successfully Authenticated :" + username));
//	}
	
	/**
	 * Login Using Credentials, Return Token and Role from here after Authentication
	 *
	 */
	@PostMapping("/auth")
    private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authRequest){
		String username=authRequest.getUsername();
		String password=authRequest.getPassword();
		try {
			authenticationmanager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}
		catch(Exception E) {
			return ResponseEntity.ok(new AuthenticationResponse("Incorrect Username Or Password "+ username));

		}
		UserDetails loadeduser=userservice.loadUserByUsername(username);
		String generatedToken=jwtUtils.generateToken(loadeduser);
		UserModel userdata = userrepo.findByusername(username);
		
		return ResponseEntity.ok(new AuthenticationResponse("User Successfully Authenticated : " + username,generatedToken, true, userdata));

	}

}
