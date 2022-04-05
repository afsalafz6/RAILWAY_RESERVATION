package com.train.trainservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class TrainServiceApplication {

	private static final Logger LOG = LoggerFactory.getLogger(TrainServiceApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(TrainServiceApplication.class, args);
		
		
		LOG.info("Running Train Service.......................");
	}

}
