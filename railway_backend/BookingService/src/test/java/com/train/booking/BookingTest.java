package com.train.booking;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.train.booking.model.BookingDetails;
import com.train.booking.repo.BookingDetailsRepository;
import com.train.booking.service.BookingService;


@SpringBootTest(classes = { BookingTest.class })
public class BookingTest {
	
	@Mock
	private BookingDetailsRepository bookRepo;

	@InjectMocks
	private BookingService bookService;
	
	
	@Test
	@DisplayName("Create Booking Details")
	void getaddTrainTest() {

		BookingDetails bookingmodel = new BookingDetails("id1","TRN098",2,1000.0,"general","userId3",true,false,"Order_344","kochi","thalassery","22:00","10:00");

		when(bookRepo.save(bookingmodel)).thenReturn(bookingmodel);
		assertEquals(bookingmodel, bookService.addBookingDetails(bookingmodel));
	}
	
	@Test
	@DisplayName("Get All Booking Details")
	public void getAllBookingTest() {
		List<BookingDetails> myBookings = new ArrayList<BookingDetails>();
		myBookings.add(new BookingDetails("id1","TRN098",2,1000.0,"general","userId3",true,false,"Order_344","kochi","thalassery","22:00","10:00"));
		myBookings.add(new BookingDetails("id2","TRN099",2,1000.0,"general","userId5",true,false,"Order_346","kochi","thalassery","21:00","11:00"));


		when(bookRepo.findAll()).thenReturn(myBookings);

		assertEquals(2, bookService.getAllBookings().size());
		assertEquals(myBookings, bookService.getAllBookings());
	}
	
	@Test
	@DisplayName("Get All Booking Details by User")
	public void getBookingbyUserTest() {
		List<BookingDetails> myBookings = new ArrayList<BookingDetails>();
		BookingDetails b1 =new BookingDetails("id1","TRN098",2,1000.0,"general","userId3",true,false,"Order_344","kochi","thalassery","22:00","10:00");
		BookingDetails b2 =new BookingDetails("id2","TRN099",2,1000.0,"general","userId5",true,false,"Order_346","kochi","thalassery","21:00","11:00");


		when(bookRepo.findById("id1")).thenReturn(Optional.of(b1));
		when(bookRepo.findById("id2")).thenReturn(Optional.of(b2));

//		assertEquals(1, bookService.getAllBookbyUser("userId3").size());
		assertEquals(myBookings, bookService.getAllBookbyUser("userId3"));
	}
	
	@Test
	@DisplayName("Cancel Booking")
	public void cancelBookingTest() {
		BookingDetails b2 =new BookingDetails("id2","TRN099",2,1000.0,"general","userId5",true,false,"Order_346","kochi","thalassery","21:00","11:00");

		when(bookRepo.findByid("id2")).thenReturn(b2);
		bookService.cancelBooking(b2.getId());

		assertEquals(true, b2.getCancel_status());
	}
	
	@Test
	@DisplayName("Booking using Getters and Setters")
	void testGetTrain() {
		
		BookingDetails book = new BookingDetails();
		book.setId("622b19ff64eb3171bec1eee");
		book.setTrain_id("TRN098");
		book.setQuantity(2);
		book.setTotalfare(1000.0);
		book.setQuota("general");
		book.setBooked_by("userId3");
		book.setPayment_status(true);
		book.setCancel_status(false);
		book.setPayOrderId("Order_344");
		book.setDepart("kochi");
		book.setArrival("thalassery");
		book.setDepart_time("22:00");
		book.setArrival_time("10:00");
	
		assertEquals("622b19ff64eb3171bec1eee", book.getId());
		assertEquals("TRN098", book.getTrain_id());
		assertEquals(2, book.getQuantity());
		assertEquals(1000.0, book.getTotalfare());
		assertEquals("general", book.getQuota());
		assertEquals("userId3", book.getBooked_by());
		assertEquals(true, book.getPayment_status());
		assertEquals(false, book.getCancel_status());
		assertEquals("Order_344", book.getPayOrderId());
		assertEquals("kochi", book.getDepart());
		assertEquals("thalassery", book.getArrival());
		assertEquals("22:00", book.getDepart_time());
		assertEquals("10:00", book.getArrival_time());
	}


}
