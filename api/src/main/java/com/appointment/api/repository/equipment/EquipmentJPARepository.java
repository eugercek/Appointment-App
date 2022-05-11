package com.appointment.api.repository.equipment;

import com.appointment.api.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface EquipmentJPARepository extends JpaRepository<Equipment, Integer> {
    @Modifying
    @Query(value = "INSERT INTO equipment(equip_person_ssn, name, purpose) values (:ssn, :name, :purpose);", nativeQuery = true)
    int addEquipment(int ssn, String name, String purpose);
}
