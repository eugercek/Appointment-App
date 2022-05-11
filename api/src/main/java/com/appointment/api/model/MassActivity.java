package com.appointment.api.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "mass_activity")
public class MassActivity {
    @Id
    @Column(name = "activity_id", nullable = false)
    private Integer id;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;
}