package com.appointment.api.model.Request;

import lombok.Data;

import java.util.Date;

@Data
public class AppointmentRequest {
    private int customerId;
    private int activityId;
    private int animatorId;
    private Date date;
    private int hour;
}
