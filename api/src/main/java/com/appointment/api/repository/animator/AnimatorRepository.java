package com.appointment.api.repository.animator;

import com.appointment.api.model.Animator;
import com.appointment.api.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import java.text.MessageFormat;

public class AnimatorRepository {
    // TODO Find how to use DId sql
    @Autowired
    private EntityManager entityManager;

    public void addAnimator (Animator animator) {
        String query  = MessageFormat.format(
                "INSERT INTO animator(name, phone_number, expertise_area) values ({1}, {2}, {3});",
                animator.getName(),
                animator.getPhoneNumber(),
                animator.getExpertiseArea()
        );

         entityManager.createNativeQuery(query);
    }
}