package com.appointment.api.repository.equip;

import com.appointment.api.model.EquipmentPerson;

import java.text.MessageFormat;

public class EquipmentPersonRepository {
    // TODO Find how to use DId sql
    public void addEquipmentPerson(EquipmentPerson ep){
        String query  = MessageFormat.format(
                "INSERT INTO equip_person(ssn, name, surname, contact_phone) values ({1}, {2}, {3}, {4});",
                ep.getId(),
                ep.getName(),
                ep.getSurname(),
                ep.getContactPhone()
        );
    }
}
