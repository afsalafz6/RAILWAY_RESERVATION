package com.train.booking.model;

public class BookingResponse {
	private String response;
	private String bookingId;

	public BookingResponse(String response, String bookingId) {
		super();
		this.response = response;
		this.bookingId = bookingId;
	}

	public BookingResponse() {
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public String getBookingId() {
		return bookingId;
	}

	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}

}
