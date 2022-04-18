package com.train.trainservice.customexception;

import org.springframework.stereotype.Component;

@Component
public class TrainDetailsNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	private String ErrorCode;
	private String ErrorMessage;
	
	public TrainDetailsNotFoundException(String errorCode, String errorMessage) {
		super();
		ErrorCode = errorCode;
		ErrorMessage = errorMessage;
	}
	public String getErrorCode() {
		return ErrorCode;
	}
	public void setErrorCode(String errorCode) {
		ErrorCode = errorCode;
	}
	public String getErrorMessage() {
		return ErrorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		ErrorMessage = errorMessage;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public TrainDetailsNotFoundException() {}
	
	@Override
	public String toString() {
		return "AddDetailsExceptions [ErrorCode=" + ErrorCode + ", ErrorMessage=" + ErrorMessage + "]";
	}

}
