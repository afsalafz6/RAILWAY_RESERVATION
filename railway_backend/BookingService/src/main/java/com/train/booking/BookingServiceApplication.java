package com.train.booking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
@EnableEurekaClient
public class BookingServiceApplication {

	private static final Logger LOG = LoggerFactory.getLogger(BookingServiceApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(BookingServiceApplication.class, args);

		LOG.info("Running Booking Service.......................");
	}

	@Bean
	@LoadBalanced
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}