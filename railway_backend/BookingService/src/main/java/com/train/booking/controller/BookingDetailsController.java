package com.train.booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.razorpay.RazorpayException;
import com.train.booking.model.BookingDetails;
import com.train.booking.model.BookingResponse;
import com.train.booking.repo.BookingDetailsRepository;
import com.train.booking.service.BookingService;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;


@CrossOrigin(origins = "*")
@OpenAPIDefinition
@RestController
//@EnableHystrix
//@EnableHystrixDashboard
@RequestMapping("/bookingdetails")
public class BookingDetailsController {

	@Autowired
	BookingDetailsRepository bookingRepo;

	@Autowired
	BookingService bookingServ;
	
//	@Autowired
//	RestTemplate template;

	@GetMapping("/")
	public String home() {
		return "HOME PAGE, anybody can access";
	}

	/**
	 * Create Booking Details
	 *
	 */
	@PostMapping("/add")
	public ResponseEntity<?> addTrainDetails(@RequestBody BookingDetails bookingdetails) {
		BookingDetails save = bookingServ.addBookingDetails(bookingdetails);
		return ResponseEntity.ok(new BookingResponse("Complete your payment for Successfull Booking", save.getId()));
	}

	/**
	 * Get All Booking Details
	 *
	 */
	@GetMapping("/getall")
	public List<BookingDetails> get() {
		return bookingServ.getAllBookings();
	}

	/**
	 * Delete Booking Details by Id
	 *
	 */
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") BookingDetails id) {
		return bookingServ.deleteBooking(id);
	}

	/**
	 * Get Booking Details by Id
	 *
	 */
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<?> getById(@PathVariable("id") String id) {
		return bookingServ.getBookingsbyId(id);

	}

	/**
	 * Update Booking Details
	 * when user make payment successfully through Payment Gateway 
	 *   
	 *   "payment_status : true"
	 * @throws RazorpayException t
	 *
	 */
	@PutMapping("/updatepayment/{id}")
	public void UpdatePaymentStatus(@PathVariable("id") String id) throws RazorpayException {
		bookingServ.updatePaymentStatus(id);
	}

	/**
	 * Update Booking Details
	 * when user sent amount to razorpay ,it will return with orderId then,
	 *   
	 *   "PayOrderId : ORDERID(String)"
	 *
	 */
	@PutMapping("/updateorderid/{bookingId}/{orderId}")
	public void UpdateOrderID(@PathVariable("bookingId") String bookid, @PathVariable("orderId") String orderid) {
		bookingServ.updateOrderId(bookid, orderid);

	}

	/**
	 * Update Train Details
	 * 
	 * 		after Successfull booking update Train Details
	 *			set SeatsLeft minus bookedSeats
	 */
//	@PutMapping("/updateseats/{bookingId}")
//	public void UpdateSeats(@PathVariable("bookingId") String bookid) {
//		bookingServ.updateSeats(bookid);
//
//	}

	/**
	 * Get Booking Details by USERID
	 *
	 */
	@GetMapping("/getbookbyuser/{userId}")
	public List<BookingDetails> getAllBookDetailsbyUser(@PathVariable("userId") String userid) {

		return bookingServ.getAllBookbyUser(userid);

	}

	/**
	 * Cancel Booking Details
	 * 		cancel_status : true
	 *
	 */
	@PutMapping("/cancelbooking/{bookingId}")
	public void CancelBooking(@PathVariable("bookingId") String bookid) {
		bookingServ.cancelBooking(bookid);
	}
	
//	@HystrixCommand(groupKey = "all trains", commandKey = "all trains", fallbackMethod = "allTrainsFallBack")
//	@GetMapping("/alltrains")
//	public String allTrains() {
//		String trainServiceResponse = template.getForObject("http://localhost:5001/traindetails/getall", String.class);
////		String trainServiceResponse = template.getForObject("http://localhost:5002/user/", String.class);
//		System.out.println("trainServiceResponse" + trainServiceResponse);
//		return trainServiceResponse;
//	}
//	
//	public String allTrainsFallBack() {
//		return "Service Gateway Failed...!";
//	}

}
