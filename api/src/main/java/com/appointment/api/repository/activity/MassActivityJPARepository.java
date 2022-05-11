package com.appointment.api.repository.activity;

import com.appointment.api.model.MassActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MassActivityJPARepository extends JpaRepository<MassActivity, Integer> {
    @Query(value = "select a.name, m.capacity, a.id from mass_activity m inner join activity a on m.activity_id = a.id", nativeQuery = true)
    List<Object> getMassActivities();

    @Modifying
    @Query(value = "INSERT INTO mass_activity(activity_id, capacity) values (:id, :capacity);", nativeQuery = true)
    int addMassActivity(int id, int capacity);
}
