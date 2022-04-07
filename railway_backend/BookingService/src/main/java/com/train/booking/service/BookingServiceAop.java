package com.train.booking.service;


import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


@Aspect
@Component
public class BookingServiceAop {

	private static final Logger LOG = LoggerFactory.getLogger(BookingServiceAop.class);

	@Pointcut("execution(public void com.train.booking.service.BookingService.cancelBooking()))")
	public void p1() {
		
	}
	
//	ADVICES
	@Before("p1()")
	public void beginBookCancel() {
		System.out.println("Booking Cancellation Begins !!!");
		LOG.info("Booking Cancellation Begins !!!.......................");
	}
//	@Before(value = "execution(* com.train.booking.service.BookingService.cancelBooking())")
//	public void beginBookCancel1() {
//		System.out.println("Booking Cancellation Begins !!!");
//	}
	
	
	@After("p1()")
	public void completeBookCancel() {
		System.out.println("Booking Cancellation Completed !!!");
		LOG.info("Booking Cancellation Completed !!!.......................");
	}
	
//	@After(value = "execution(* com.train.booking.service.BookingService.cancelBooking())")
//	public void completeBookCancel1() {
//		System.out.println("Booking Cancellation Completed !!!");
//	}
}
