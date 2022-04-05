package com.train.UserService.model;


public class AuthenticationResponse {
	
	private String response;
	private String token;
	private Boolean success;
	private UserModel loggeduser;
	
	public AuthenticationResponse() {
	}
	


	public AuthenticationResponse(String response) {
		this.response = response;
	}

	
	public AuthenticationResponse(String response, String token, Boolean success, UserModel loggeduser) {
		this.response = response;
		this.token = token;
		this.success = success;
		this.loggeduser = loggeduser;
	}

	
	public UserModel getLoggeduser() {
		return loggeduser;
	}



	public void setLoggeduser(UserModel loggeduser) {
		this.loggeduser = loggeduser;
	}



	public String getToken() {
		return token;
	}



	public void setToken(String token) {
		this.token = token;
	}



	public Boolean getSuccess() {
		return success;
	}



	public void setSuccess(Boolean success) {
		this.success = success;
	}



	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}
	
	
	
	

}
