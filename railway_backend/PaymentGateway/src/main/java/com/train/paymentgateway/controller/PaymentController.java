package com.train.paymentgateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.RazorpayException;
import com.train.paymentgateway.service.PaymentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
	PaymentService paymentservice;

	/**
	 * CREATE ORDER IN RAZORPAY ACCORDING TO AMOUNT, AND RETURN ORDERID
	 *
	 */
	@PostMapping("/create_order")
	public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
		System.out.println("INSIDE PAYMENT ORDER");
		return paymentservice.createOrder(data);
		
//		Double amt = Double.parseDouble(data.get("amount").toString());
//		var client = new RazorpayClient("rzp_test_qSq0gWHEAQOThF", "LE3jay3yFZ9WgMuy5W4AzNK7");
//		JSONObject orderRequest = new JSONObject();
//		orderRequest.put("amount", amt*100); // amount in the smallest currency unit
//		orderRequest.put("currency", "INR");
//		orderRequest.put("receipt", "RAIL_76576");
//		Order order = client.Orders.create(orderRequest);
//		System.out.println(order);
//		return order.toString();
	}

}
