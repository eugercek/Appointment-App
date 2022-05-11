package com.appointment.api.repository.activity;

import com.appointment.api.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ActivityJPARepository extends JpaRepository<Activity, Integer> {
    @Query(value = "select * from activity", nativeQuery = true)
    List<Activity> getActivities();

    @Modifying
    @Query(value = "INSERT INTO activity(name, internet_link) values (:name, :internetLink);", nativeQuery = true)
    int addActivity(String name, String internetLink);

    @Query(value = "select * from activity order by id desc limit 1", nativeQuery = true)
    Activity getLastActivity();
}
