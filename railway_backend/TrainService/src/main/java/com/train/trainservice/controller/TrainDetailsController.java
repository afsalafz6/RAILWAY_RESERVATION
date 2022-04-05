package com.train.trainservice.controller;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.train.trainservice.model.TrainDetails;
import com.train.trainservice.repo.TrainDetailsRepository;
import com.train.trainservice.service.TrainDetailsService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/traindetails")
public class TrainDetailsController {

	@Autowired
	TrainDetailsRepository traindetailsrepo;
	
	@Autowired
	TrainDetailsService trainServ;
	
	/**
	 * Create Train Details
	 *
	 */
	@PostMapping("/add")
	public String addTrainDetails(@RequestBody TrainDetails traindetails) {
		trainServ.addTrainDetails(traindetails);
		 return "Train Details Successfully Saved";
	}
	
	/**
	 * Get All Train Details
	 *
	 */
	@GetMapping("/getall")
	public List<TrainDetails> get() {
		return trainServ.getAllTrains();
		
	}
	
	/**
	 * Delete a Train Details
	 *
	 */
	@DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") String id) {
		return trainServ.deleteTrainbyId(id);
    }
	
	/**
	 * Get Train Details by Id
	 *
	 */
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<?> getById(@PathVariable("id") String id) {
		return trainServ.getTrainbyId(id);
		
	}
	
	/**
	 * Update Train Details by Id
	 *
	 */
	@PutMapping("/update/{id}")
	public String Update(@PathVariable("id") TrainDetails id, @RequestBody TrainDetails traindetails) {
		return trainServ.updateTrainbyId(traindetails);
		
	}
	
	/**
	 * Search Train Details by Departure and Arrival Station
	 *
	 */
	@GetMapping("/search/{dept}/{arrvl}")
	public List<TrainDetails> searchTrain(@PathVariable("dept") String departure, @PathVariable("arrvl") String arrival)
	{
		return trainServ.getTrainbySearch(departure, arrival);
	}
}
