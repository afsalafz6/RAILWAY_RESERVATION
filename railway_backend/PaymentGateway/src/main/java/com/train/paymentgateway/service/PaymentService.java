package com.train.paymentgateway.service;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class PaymentService {

	public String createOrder(Map<String, Object> data) throws RazorpayException {
		Double amt = Double.parseDouble(data.get("amount").toString());

		var client = new RazorpayClient("rzp_test_qSq0gWHEAQOThF", "LE3jay3yFZ9WgMuy5W4AzNK7");

		JSONObject orderRequest = new JSONObject();

		orderRequest.put("amount", amt*100); // amount in the smallest currency unit

		orderRequest.put("currency", "INR");

		orderRequest.put("receipt", "RAIL_76576");

		Order order = client.Orders.create(orderRequest);

		System.out.println(order);

		return order.toString();
	}
	
	

}
