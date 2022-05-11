package com.appointment.api.repository.activity;

import com.appointment.api.model.IndividualActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IndividualActivityJPARepository extends JpaRepository<IndividualActivity, Integer> {
    @Query(value = "select * from individual_activity", nativeQuery = true)
    List<IndividualActivity> getIndividualActivities();

    @Modifying
    @Query(value = "INSERT INTO individual_activity(activity_id, age_requirement) values (:id, :age);", nativeQuery = true)
    int addIndividualActivity(int id, int age);
}
