package com.appointment.api.controller;

import com.appointment.api.model.Activity;
import com.appointment.api.model.EmergencyInformation;
import com.appointment.api.repository.activity.ActivityJPARepository;
import com.appointment.api.repository.emergency.EmergencyInformationJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/emergency")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmergencyController {
    @Autowired
    private ActivityJPARepository activityRepo;

    @Autowired
    private EmergencyInformationJPARepository emerRepo;

    @GetMapping("/activities")
    public List<Activity> getActivities(){
        return activityRepo.getActivities();
    }

    @PostMapping("")
    @Transactional
    public void saveActivity(@RequestBody EmergencyInformation emergencyInformation){
        System.out.println(emergencyInformation.getActivityId());
        System.out.println(emergencyInformation.getLockerNumber());
        System.out.println(emergencyInformation.getPhoneNumber());
        try {
            emerRepo.addEmergencyInformation(emergencyInformation);
        } catch (Exception e){
            System.out.println(e.getMessage());
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create Emergency.");
        }
    }
}
