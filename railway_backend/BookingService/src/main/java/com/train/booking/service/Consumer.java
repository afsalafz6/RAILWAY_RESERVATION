package com.train.booking.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class Consumer {

    private final Logger logger = LoggerFactory.getLogger(Consumer.class);

    @KafkaListener(topics = "bookings", groupId = "group_id")
    public void consume(String message) throws IOException {
        logger.info(String.format("#### -> Consuming BOOKING TOPIC message -> %s", message));
    }
}
