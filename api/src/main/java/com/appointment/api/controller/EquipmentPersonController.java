package com.appointment.api.controller;

import com.appointment.api.model.EquipmentPerson;
import com.appointment.api.repository.equip.EquipmentPersonJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/equip-persons")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EquipmentPersonController {
    @Autowired
    private EquipmentPersonJPARepository repo;

    @GetMapping("")
    public List<EquipmentPerson> getEquipmentPersons() {
        try {
            return repo.getEquipmentPersons();
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }

    @GetMapping("/{ssn}")
    public EquipmentPerson getEquipmentPerson(@PathVariable int ssn) {
        try {
            return repo.getEquipmentPersonBySSN(ssn);
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }


    // Password is added via trigger in database.
    @PostMapping("")
    @Transactional
    public void saveEquipmentPerson(@RequestBody EquipmentPerson equipmentPerson) {
        try {
            repo.addEquipmentPerson(equipmentPerson);
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }
}
