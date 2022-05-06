package com.appointment.api.repository.animator;

import com.appointment.api.model.Animator;
import com.appointment.api.model.Customer;
import java.text.MessageFormat;

public class AnimatorRepository {
    // TODO Find how to use DId sql
    public void addAnimator (Animator animator){
        String query  = MessageFormat.format(
                "INSERT INTO animator(name, phone_number, expertise_area) values ({1}, {2}, {3});",
                animator.getName(),
                animator.getPhoneNumber(),
                animator.getExpertiseArea()
        );
    }
}