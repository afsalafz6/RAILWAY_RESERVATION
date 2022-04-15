package com.apigateway.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallbackController {

    @GetMapping("/userServiceFallback")
    public String userServiceFallback(){
        return  "user service is down";
    }


    @GetMapping("/trainServiceFallback")
    public String trainServiceFallback(){
        return  "train service is down";
    }


    @GetMapping("/bookingServiceFallback")
    public String bookingServiceFallback(){
        return  "booking service is down";
    }


    @GetMapping("/paymentServiceFallback")
    public String paymentServiceFallback(){
        return  "payment service is down";
    }


}

