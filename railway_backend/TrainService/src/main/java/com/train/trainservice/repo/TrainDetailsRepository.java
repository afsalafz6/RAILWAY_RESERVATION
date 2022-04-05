package com.train.trainservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.train.trainservice.model.TrainDetails;

public interface TrainDetailsRepository extends JpaRepository<TrainDetails, String> {
}
