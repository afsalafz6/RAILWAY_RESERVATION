package com.train.booking.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.train.booking.model.BookingDetails;

public interface BookingDetailsRepository extends MongoRepository<BookingDetails, String> {

	BookingDetails findByid(String id);

}
