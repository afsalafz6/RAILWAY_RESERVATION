package com.train.trainservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.train.trainservice.model.TrainDetails;
import com.train.trainservice.repo.TrainDetailsRepository;

@Service
public class TrainDetailsService {

	@Autowired
	TrainDetailsRepository traindetailsrepo;

	public List<TrainDetails> getAllTrains() {
		List<TrainDetails> alltrain = this.traindetailsrepo.findAll();
		return alltrain;
	}

	public TrainDetails addTrainDetails(TrainDetails trainmodel) {
		TrainDetails train = this.traindetailsrepo.save(trainmodel);
		return train;
	}

	public String deleteTrainbyId(String id) {
		this.traindetailsrepo.deleteById(id);
		return "Train Details Successfully Deleted";
	}


	public List<TrainDetails> getTrainbySearch(String dept, String arrvl) {

		List<TrainDetails> trains = new ArrayList<>();
		List<TrainDetails> SearchList = new ArrayList<>();

		traindetailsrepo.findAll().forEach(trains::add);

		for (TrainDetails t : trains) {
			if (t.getDeparture_station().equals(dept) && t.getArrival_station().equals(arrvl)) {
				SearchList.add(t);

			}
		}
		return SearchList;

	}

	public ResponseEntity<?> getTrainbyId(String id) {
		return ResponseEntity.ok(this.traindetailsrepo.findById(id));
	}
	
	

	public String updateTrainbyId(TrainDetails traindetails) {
		this.traindetailsrepo.save(traindetails);
		return "Train Details Successfully Updated";
	}

}
