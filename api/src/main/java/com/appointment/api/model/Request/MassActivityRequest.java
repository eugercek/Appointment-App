package com.appointment.api.model.Request;

import lombok.Data;

@Data
public class MassActivityRequest {
    private String name;
    private String internetLink;
    private int capacity;
}
