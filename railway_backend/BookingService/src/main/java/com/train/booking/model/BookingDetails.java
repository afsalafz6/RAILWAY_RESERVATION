package com.train.booking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "booking_details")
public class BookingDetails {

	@Id
	private String id;

	private String train_id;
	private Integer quantity;
	private Double totalfare;
	private String quota;
	private String booked_by;
	private Boolean payment_status;
	private Boolean cancel_status;
	private String payOrderId;
	private String depart;
	private String arrival;
	private String depart_time;
	private String arrival_time;
	
	


	public BookingDetails(String id, String train_id, Integer quantity, Double totalfare, String quota,
			String booked_by, Boolean payment_status, Boolean cancel_status, String payOrderId, String depart,
			String arrival, String depart_time, String arrival_time) {
		super();
		this.id = id;
		this.train_id = train_id;
		this.quantity = quantity;
		this.totalfare = totalfare;
		this.quota = quota;
		this.booked_by = booked_by;
		this.payment_status = payment_status;
		this.cancel_status = cancel_status;
		this.payOrderId = payOrderId;
		this.depart = depart;
		this.arrival = arrival;
		this.depart_time = depart_time;
		this.arrival_time = arrival_time;
	}

	public BookingDetails() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTrain_id() {
		return train_id;
	}

	public void setTrain_id(String train_id) {
		this.train_id = train_id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getTotalfare() {
		return totalfare;
	}

	public void setTotalfare(Double totalfare) {
		this.totalfare = totalfare;
	}

	public String getQuota() {
		return quota;
	}

	public void setQuota(String quota) {
		this.quota = quota;
	}

	public String getBooked_by() {
		return booked_by;
	}

	public void setBooked_by(String booked_by) {
		this.booked_by = booked_by;
	}

	public Boolean getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(Boolean payment_status) {
		this.payment_status = payment_status;
	}

	public Boolean getCancel_status() {
		return cancel_status;
	}

	public void setCancel_status(Boolean cancel_status) {
		this.cancel_status = cancel_status;
	}

	public String getPayOrderId() {
		return payOrderId;
	}

	public void setPayOrderId(String payOrderId) {
		this.payOrderId = payOrderId;
	}

	public String getDepart() {
		return depart;
	}

	public void setDepart(String depart) {
		this.depart = depart;
	}

	public String getArrival() {
		return arrival;
	}

	public void setArrival(String arrival) {
		this.arrival = arrival;
	}

	public String getDepart_time() {
		return depart_time;
	}

	public void setDepart_time(String depart_time) {
		this.depart_time = depart_time;
	}

	public String getArrival_time() {
		return arrival_time;
	}

	public void setArrival_time(String arrival_time) {
		this.arrival_time = arrival_time;
	}

	@Override
	public String toString() {
		return "BookingDetails [id=" + id + ", train_id=" + train_id + ", quantity=" + quantity + ", totalfare="
				+ totalfare + ", quota=" + quota + ", booked_by=" + booked_by + ", payment_status=" + payment_status
				+ ", cancel_status=" + cancel_status + ", payOrderId=" + payOrderId + ", depart=" + depart
				+ ", arrival=" + arrival + ", depart_time=" + depart_time + ", arrival_time=" + arrival_time + "]";
	}
	
	
	
	
	
	
	
	
}
