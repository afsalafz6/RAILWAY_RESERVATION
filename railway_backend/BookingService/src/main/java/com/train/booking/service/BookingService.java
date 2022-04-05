package com.train.booking.service;

import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.train.booking.model.BookingDetails;
import com.train.booking.repo.BookingDetailsRepository;

@CrossOrigin(origins = "*")
@Service
public class BookingService {
	
	private static final Logger LOG = LoggerFactory.getLogger(BookingService.class);

	@Autowired
	BookingDetailsRepository bookrepo;
	
	@Autowired
	Producer producer;
	
//	private final Producer producer;
//
//    @Autowired
//    BookingService(Producer producer) {
//        this.producer = producer;
//    }

	/**
	 * Get Booking Details by USERID
	 *
	 */
	public List<BookingDetails> getAllBookbyUser(String userid) {
		List<BookingDetails> bookings = new ArrayList<>();
		List<BookingDetails> Match = new ArrayList<>();

		bookrepo.findAll().forEach(bookings::add);

		for (BookingDetails b : bookings) {
			if (b.getBooked_by().equals(userid)) {
				Match.add(b);

			}
			
		}
		return Match;
	}

	/**
	 * Get All Booking Details
	 *
	 */
	public List<BookingDetails> getAllBookings() {
		List<BookingDetails> allbooking = this.bookrepo.findAll();
		return allbooking;
	}
	
	public void cancelBooking(String bookid) {
		LOG.info(String.format("#### -> Cancel Booking ,with Booking id:  -> %s", bookid));
		BookingDetails bookDetails = bookrepo.findByid(bookid);
		bookDetails.setCancel_status(true);
		this.bookrepo.save(bookDetails);
	}

	/**
	 * Create Booking Details
	 *
	 */
	public BookingDetails addBookingDetails(BookingDetails bookingmodel) {
		BookingDetails book = this.bookrepo.save(bookingmodel);
		this.producer.sendMessage(bookingmodel.toString());
		return book;
	}

	/**
	 * Get Booking Details by Id
	 *
	 */
	public ResponseEntity<?> getBookingsbyId(String bookid) {
		return ResponseEntity.ok(this.bookrepo.findById(bookid));
	}

	/**
	 * Delete Booking Details by Id
	 *
	 */
	public String deleteBooking(BookingDetails id) {
		this.bookrepo.delete(id);
		return "Booking Details Successfully Deleted";
	}

	/**
	 * Update Booking Details
	 * when user sent amount to razorpay ,it will return with orderId then,
	 *   
	 *   "PayOrderId : ORDERID(String)"
	 *
	 */
	public void updateOrderId(String bookid, String orderid) {
		BookingDetails bookDetails = bookrepo.findByid(bookid);
		bookDetails.setPayOrderId(orderid);
		this.bookrepo.save(bookDetails);
		
	}

	/**
	 * Update Booking Details
	 * when user make payment successfully through Payment Gateway 
	 *   
	 *   "payment_status : true"
	 * @throws RazorpayException t
	 *
	 */
	public void updatePaymentStatus(String id) throws RazorpayException {
		LOG.info(String.format("#### -> update Payment Status in Booking, with Booking id:  -> %s", id));
		BookingDetails bookDetails = bookrepo.findByid(id);
		System.out.println("BookingId " + id);
		RazorpayClient razorpay = new RazorpayClient("rzp_test_qSq0gWHEAQOThF", "LE3jay3yFZ9WgMuy5W4AzNK7");
		try {
			Order order = razorpay.Orders.fetch(bookDetails.getPayOrderId());
			System.out.println("getPayOrderId " + bookDetails.getPayOrderId());
			System.out.println(order.toString());
			System.out.println(order.get("status").toString());
			if (order.get("status").toString().equals("paid")) {
				bookDetails.setPayment_status(true);
				this.bookrepo.save(bookDetails);
			}
		} catch (RazorpayException e) {
			System.out.println(e.getMessage());
		}
		
	}

}
