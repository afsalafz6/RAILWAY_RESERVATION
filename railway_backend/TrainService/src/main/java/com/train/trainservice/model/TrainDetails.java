package com.train.trainservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="train_details")
public class TrainDetails {

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String id;

	private String train_id;
	private String train_name;
	private String departure_station;
	private String arrival_station;
	private String departure_time;
	private String arrival_time;
	private Double general_fare;
	private Double ladies_fare;
	private Number total_seats;
	private Number seats_left;
	private Boolean status;
	
	public TrainDetails() {
		
	}

	public TrainDetails(String id, String train_id, String train_name, String departure_station, String arrival_station,
			String departure_time, String arrival_time, Double general_fare, Double ladies_fare, Number total_seats,
			Number seats_left, Boolean status) {
		super();
		this.id = id;
		this.train_id = train_id;
		this.train_name = train_name;
		this.departure_station = departure_station;
		this.arrival_station = arrival_station;
		this.departure_time = departure_time;
		this.arrival_time = arrival_time;
		this.general_fare = general_fare;
		this.ladies_fare = ladies_fare;
		this.total_seats = total_seats;
		this.seats_left = seats_left;
		this.status = status;
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


	public String getTrain_name() {
		return train_name;
	}


	public void setTrain_name(String train_name) {
		this.train_name = train_name;
	}


	public String getDeparture_station() {
		return departure_station;
	}


	public void setDeparture_station(String departure_station) {
		this.departure_station = departure_station;
	}


	public String getArrival_station() {
		return arrival_station;
	}


	public void setArrival_station(String arrival_station) {
		this.arrival_station = arrival_station;
	}


	public String getDeparture_time() {
		return departure_time;
	}


	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}


	public String getArrival_time() {
		return arrival_time;
	}


	public void setArrival_time(String arrival_time) {
		this.arrival_time = arrival_time;
	}


	public Double getGeneral_fare() {
		return general_fare;
	}


	public void setGeneral_fare(Double general_fare) {
		this.general_fare = general_fare;
	}


	public Double getLadies_fare() {
		return ladies_fare;
	}


	public void setLadies_fare(Double ladies_fare) {
		this.ladies_fare = ladies_fare;
	}


	public Number getTotal_seats() {
		return total_seats;
	}


	public void setTotal_seats(Number total_seats) {
		this.total_seats = total_seats;
	}


	public Number getSeats_left() {
		return seats_left;
	}


	public void setSeats_left(Number seats_left) {
		this.seats_left = seats_left;
	}


	public Boolean getStatus() {
		return status;
	}


	public void setStatus(Boolean status) {
		this.status = status;
	}
	
	

	

}
