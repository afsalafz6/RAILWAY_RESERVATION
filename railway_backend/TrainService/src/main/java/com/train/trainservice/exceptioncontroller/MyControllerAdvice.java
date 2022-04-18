package com.train.trainservice.exceptioncontroller;

import org.apache.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.train.trainservice.customexception.TrainDetailsNotFoundException;

@ControllerAdvice
public class MyControllerAdvice {
	
	@ExceptionHandler(TrainDetailsNotFoundException.class)
	public ResponseEntity<String> handelNoSuchElement(TrainDetailsNotFoundException trainDetailsNotFoundException){
		return new ResponseEntity<String>(trainDetailsNotFoundException.getErrorMessage(), null, HttpStatus.SC_BAD_REQUEST);
	}
}
