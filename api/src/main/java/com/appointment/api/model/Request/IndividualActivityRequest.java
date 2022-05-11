package com.appointment.api.model.Request;

import lombok.Data;

@Data
public class IndividualActivityRequest {
    private String name;
    private String internetLink;
    private int ageRequirement;
}
