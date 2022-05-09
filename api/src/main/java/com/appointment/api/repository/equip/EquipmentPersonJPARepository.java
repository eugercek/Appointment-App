package com.appointment.api.repository.equip;

import com.appointment.api.model.EquipmentPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EquipmentPersonJPARepository extends JpaRepository<EquipmentPerson, Integer> {
    @Query(value = "SELECT * FROM equip_person where ssn = :ssn", nativeQuery = true)
    EquipmentPerson getEquipmentPersonBySSN(int ssn);

    @Query(value = "SELECT * FROM equip_person", nativeQuery = true)
    List<EquipmentPerson> getEquipmentPersons();

    @Modifying
    @Query(value ="INSERT INTO equip_person(ssn, name, surname, contact_phone) values (:#{#equip.id},:#{#equip.name},:#{#equip.surname},:#{#equip.contactPhone});", nativeQuery = true)
    int addEquipmentPerson(@Param("equip") EquipmentPerson equip);
}
