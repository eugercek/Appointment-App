package com.appointment.api.model;

import javax.persistence.*;

@Entity
@Table(name = "emergency_information")
public class EmergencyInformation {
    @EmbeddedId
    private EmergencyInformationId id;

    @MapsId("activityId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "activity_id", nullable = false)
    private Activity activity;

    public EmergencyInformationId getId() {
        return id;
    }

    public void setId(EmergencyInformationId id) {
        this.id = id;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

}