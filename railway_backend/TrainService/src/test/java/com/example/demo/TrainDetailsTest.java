package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

//import java.util.stream.Collectors;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.junit.jupiter.api.DisplayName;
import org.springframework.boot.test.context.SpringBootTest;

import com.train.trainservice.model.TrainDetails;
import com.train.trainservice.repo.TrainDetailsRepository;
import com.train.trainservice.service.TrainDetailsService;

@SpringBootTest(classes = { TrainDetailsTest.class })
public class TrainDetailsTest {

	@Mock
	private TrainDetailsRepository trainRepo;

	@InjectMocks
	private TrainDetailsService trainService;


	@Test
	@DisplayName("Train data using Getters and Setters")
	void testGetTrain() {
		
		TrainDetails train = new TrainDetails();
		train.setId("622b19ff64eb3171bec1eee");
		train.setTrain_id("TRN111");
		train.setTrain_name("Manglore Express");
		train.setDeparture_station("Manglore");
		train.setArrival_station("Kannur");
		train.setDeparture_time("18:33");
		train.setArrival_time("20:33");
		train.setGeneral_fare(500.0);
		train.setLadies_fare(470.0);
		train.setTotal_seats(1000);
		train.setSeats_left(900);
		train.setStatus(true);
		
		assertEquals(900, train.getSeats_left());
		assertEquals(1000, train.getTotal_seats());
		assertEquals("20:33", train.getArrival_time());
		assertEquals("18:33", train.getDeparture_time());
		assertEquals("TRN111", train.getTrain_id());
		assertEquals("Kannur", train.getArrival_station());
		assertEquals("Manglore Express", train.getTrain_name());
		assertEquals(500.0, train.getGeneral_fare());
		assertEquals(470.0, train.getLadies_fare());
		assertEquals(true, train.getStatus());

	}

	@Test
	@DisplayName("Create Train Details")
	void getaddTrainTest() {

		TrainDetails trainmodel = new TrainDetails("622b19ff64eb3171bec1e766", "TRN111", "Manglore Express", "Manglore",
				"Kannur", "18:33", "20:33", 500.0, 470.0, 1000, 900, true);

		when(trainRepo.save(trainmodel)).thenReturn(trainmodel);
		assertEquals(trainmodel, trainService.addTrainDetails(trainmodel));
	}

	@Test
	@DisplayName("Get All Train Details")
	public void getAllTrainTest() {
		List<TrainDetails> myTrains = new ArrayList<TrainDetails>();
		myTrains.add(new TrainDetails("622b19ff64eb3171bec1e766", "TRN111", "Manglore Express", "Manglore", "Kannur",
				"18:33", "20:33", 500.0, 470.0, 1000, 900, true));
		myTrains.add(new TrainDetails("622b19ff64eb3171bec1e323", "TRN222", "Chennai Express", "Chennai", "Kollam",
				"18:33", "20:33", 500.0, 470.0, 800, 700, true));

		when(trainRepo.findAll()).thenReturn(myTrains);

		assertEquals(2, trainService.getAllTrains().size());
		assertEquals(myTrains, trainService.getAllTrains());
	}
	
	@Test
	@DisplayName("Delete Train Details")
	public void deleteTrainTest() {
		TrainDetails train1 = new TrainDetails("622b19ff64eb3171bec1e766", "TRN111", "Manglore Express", "Manglore", "Kannur",
				"18:33", "20:33", 500.0, 470.0, 1000, 900, true);
		TrainDetails train2 = new TrainDetails("622b19ff64eb3171bec1e323", "TRN222", "Chennai Express", "Chennai", "Kollam",
				"18:33", "20:33", 500.0, 470.0, 800, 700, true);
		
//		when(trainRepo.deleteById("622b19ff64eb3171bec1e766")).thenReturn("Train Details Successfully Deleted");
		
		trainRepo.deleteById(train1.getId());
		assertEquals("Train Details Successfully Deleted", trainService.deleteTrainbyId(train1.getId()));
		
		trainRepo.deleteById(train2.getId());
		assertEquals("Train Details Successfully Deleted", trainService.deleteTrainbyId(train2.getId()));
	}
	
	@Test
	@DisplayName("Update Train Details")
	public void updateTrainTest() {
		TrainDetails train1 = new TrainDetails("622b19ff64eb3171bec1e766", "TRN111", "Manglore Express", "Manglore", "Kannur",
				"18:33", "20:33", 500.0, 470.0, 1000, 900, true);
		
		
		train1.setDeparture_time("20:20");
		train1.setArrival_time("11:11");
		train1.setGeneral_fare(560.0);
		train1.setLadies_fare(460.0);
		train1.setTotal_seats(1200);

		
		trainRepo.save(train1);
		assertEquals("Train Details Successfully Updated", trainService.updateTrainbyId(train1));
	}
	
	@Test
	@DisplayName("Search Train Details")
	public void searchTrainTest() {
		List<TrainDetails> allTrains = new ArrayList<TrainDetails>();
		allTrains.add(new TrainDetails("622b19ff64eb3171bec1e766", "TRN111", "Manglore Express", "Manglore", "Kannur",
				"18:33", "20:33", 500.0, 470.0, 1000, 900, true));
		allTrains.add(new TrainDetails("622b19ff64eb3171bec1e323", "TRN222", "Chennai Express", "Chennai", "Kollam",
				"18:33", "20:33", 500.0, 470.0, 800, 700, true));
		
		List<TrainDetails> SearchList = new ArrayList<TrainDetails>();
		
		for (TrainDetails t : allTrains) {
			if (t.getDeparture_station().equals("Manglore") && t.getArrival_station().equals("Kannur")) {
				SearchList.add(t);

			}
		}
		
		when(trainRepo.findAll()).thenReturn(allTrains);

		assertEquals(SearchList, trainService.getTrainbySearch("Manglore","Kannur"));
	}

}
