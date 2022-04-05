package com.train.UserService.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="user_data")
public class UserModel {
	
	@Id
	private String id;
	
	@NotNull(message = "UserName cannot be null")
	private String username;
	
	@NotNull(message = "Name cannot be null")
	private String name;
	
	@Min(value = 18, message = "Age should not be less than 18")
    @Max(value = 150, message = "Age should not be greater than 150")
	private int age;
	
	@NotNull(message = "gender cannot be null")
	private String gender;
	
	@Email(message = "Email should be valid")
	private String email;
	
	@NotNull(message = "Password cannot be null")
	private String password;
	
	@NotNull(message = "phone cannot be null")
	private long phone;
	
	@NotNull(message = "role cannot be null")
	private String role;
	
	
	
	public UserModel() {
		
	}


	public UserModel(String id, String username, String name, int age, String gender, String email, String password,
			long phone, String role) {
		super();
		this.id = id;
		this.username = username;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.role = role;
	}







	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}







	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public long getPhone() {
		return phone;
	}



	public void setPhone(long phone) {
		this.phone = phone;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}
	
	
	
	

}
