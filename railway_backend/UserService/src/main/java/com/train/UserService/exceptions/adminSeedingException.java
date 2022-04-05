package com.train.UserService.exceptions;

public class adminSeedingException extends Exception {

	/**
	* 
	*/
	private static final long serialVersionUID = 1L;
	String message;

	public adminSeedingException(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return message;
	}

}
