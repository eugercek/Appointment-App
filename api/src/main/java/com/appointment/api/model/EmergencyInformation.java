package com.appointment.api.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "emergency_information")
public class EmergencyInformation {
    @Id
    @Column(name = "activity_id", nullable = false)
    private Integer activityId;

    @Column(name = "phone_number", nullable = false, length = 10)
    private String phoneNumber;

    @Column(name = "locker_number", nullable = false)
    private Integer lockerNumber;
}