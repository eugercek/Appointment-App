package com.appointment.api.controller;

import com.appointment.api.model.Activity;
import com.appointment.api.model.EmergencyInformation;
import com.appointment.api.model.Equipment;
import com.appointment.api.model.EquipmentPerson;
import com.appointment.api.model.Request.EquipmentRequest;
import com.appointment.api.repository.activity.ActivityJPARepository;
import com.appointment.api.repository.emergency.EmergencyInformationJPARepository;
import com.appointment.api.repository.equipment.EquipmentJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/equipment")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EquipmentController {
    @Autowired
    private  EquipmentJPARepository repo;

    @PostMapping("")
    @Transactional
    public void saveEquipment(@RequestBody EquipmentRequest equipment){
        try {
            System.out.println(equipment.getEquipPersonSsn());
            repo.addEquipment(equipment.getEquipPersonSsn(), equipment.getName(), equipment.getPurpose());
        } catch (Exception e){
            System.out.println(e.getMessage());
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create Emergency.");
        }
    }
}
