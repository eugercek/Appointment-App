package com.appointment.api.controller;

import com.appointment.api.model.Activity;
import com.appointment.api.model.Request.IndividualActivityRequest;
import com.appointment.api.model.Request.MassActivityRequest;
import com.appointment.api.repository.activity.ActivityJPARepository;
import com.appointment.api.repository.activity.IndividualActivityJPARepository;
import com.appointment.api.repository.activity.MassActivityJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/activity")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ActivityController {
    @Autowired
    private ActivityJPARepository activityRepo;

    @Autowired
    private IndividualActivityJPARepository individualRepo;

    @Autowired
    private MassActivityJPARepository massRepo;

    @PostMapping("/individual")
    @Transactional
    // TODO Very Bad Code, I don't have time sorry for your eyes
    // Turn this into stored procedure
    public void saveIndividualActivity(@RequestBody IndividualActivityRequest activityRequest){
        try {
            activityRepo.addActivity(activityRequest.getName(), activityRequest.getInternetLink());
            Activity activity = activityRepo.getLastActivity();
            individualRepo.addIndividualActivity(activity.getId(), activityRequest.getAgeRequirement());
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create Individual Activity.");
        }
    }

    @PostMapping("/mass")
    @Transactional
    // TODO Very Bad Code, I don't have time sorry for your eyes
    // Turn this into stored procedure
    public void saveMassActivity(@RequestBody MassActivityRequest activityRequest){
        try {
            activityRepo.addActivity(activityRequest.getName(), activityRequest.getInternetLink());
            Activity activity = activityRepo.getLastActivity();
            massRepo.addMassActivity(activity.getId(), activityRequest.getCapacity());
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create Mass Activity.");
        }
    }
}
