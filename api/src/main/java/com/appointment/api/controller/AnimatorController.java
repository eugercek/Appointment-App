package com.appointment.api.controller;

import com.appointment.api.model.Animator;
import com.appointment.api.model.ExpertiseArea;
import com.appointment.api.repository.animator.AnimatorJPARepository;
import com.appointment.api.repository.animator.ExpertiseAreaJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/animators")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AnimatorController {
    @Autowired
    private AnimatorJPARepository animatorRepo;

    @Autowired
    private ExpertiseAreaJPARepository expertiseRepo;

    @GetMapping("")
    public List<Animator> getAnimators(){
        try {
            List <Animator> animators = animatorRepo.getAnimators();
            return  animators;
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }

    @GetMapping("/expertises")
    public List<ExpertiseArea> getExpertiseAreas(){
        try {
            return expertiseRepo.getExpertiseAreas();
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }

    @GetMapping("/{id}")
    public Animator getAnimator(@PathVariable int id){
        try {
            return animatorRepo.getAnimatorById(id);
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }

    // Password is added via trigger in database.
    @PostMapping("")
    @Transactional
    public void saveAnimator(@RequestBody  Animator animator){
        System.out.println("animator.getName() = " + animator.getName());
        System.out.println("animator.getId() = " + animator.getId());
        System.out.println("animator.getPasswd() = " + animator.getPasswd());
        System.out.println("animator.getPhoneNumber() = " + animator.getPhoneNumber());
        System.out.println("animator.getExpertiseArea() = " + animator.getExpertiseArea());
        try {
            // -1 is convention for not entered ID
            if(animator.getId() == -1){
                animatorRepo.addAnimator(animator) ;
            }
            else {
                animatorRepo.addAnimatorWithId(animator);
            }
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create animator.");
        }
    }
}
