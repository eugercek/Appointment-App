package com.appointment.api.model.Request;

import lombok.Data;

import javax.persistence.*;

@Data
public class EquipmentRequest {
    private String name;
    private int equipPersonSsn;
    private String purpose;

}