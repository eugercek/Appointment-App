package com.appointment.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "individual_activity")
public class IndividualActivity {
    @Id
    @Column(name = "activity_id", nullable = false)
    private Integer id;

    @Column(name = "age_requirement", nullable = false)
    private Integer ageRequirement;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAgeRequirement() {
        return ageRequirement;
    }

    public void setAgeRequirement(Integer ageRequirement) {
        this.ageRequirement = ageRequirement;
    }

}