package com.appointment.api.repository.emergency;

import com.appointment.api.model.EmergencyInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface EmergencyInformationJPARepository extends JpaRepository<EmergencyInformation, Integer> {
    @Modifying
    @Query(value = "INSERT INTO emergency_information(activity_id, phone_number, locker_number) values (:#{#emer.activityId}, :#{#emer.phoneNumber}, :#{#emer.lockerNumber});", nativeQuery = true)
    int addEmergencyInformation(EmergencyInformation emer);
}
