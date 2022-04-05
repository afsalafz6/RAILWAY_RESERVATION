package com.train.paymentgateway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
public class PaymentGatewayApplication {

	 private static final Logger LOG = LoggerFactory.getLogger(PaymentGatewayApplication.class);
	 
	public static void main(String[] args) {
		SpringApplication.run(PaymentGatewayApplication.class, args);
		
		LOG.info("Running Payment Gateway.......................");
		
	}

}
