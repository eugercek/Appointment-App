package com.appointment.api.model;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EmergencyInformationId implements Serializable {
    private static final long serialVersionUID = -7753770143397112961L;
    @Column(name = "activity_id", nullable = false)
    private Integer activityId;

    @Column(name = "phone_number", nullable = false, length = 10)
    private String phoneNumber;

    @Column(name = "locker_number", nullable = false)
    private Integer lockerNumber;

    public Integer getActivityId() {
        return activityId;
    }

    public void setActivityId(Integer activityId) {
        this.activityId = activityId;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Integer getLockerNumber() {
        return lockerNumber;
    }

    public void setLockerNumber(Integer lockerNumber) {
        this.lockerNumber = lockerNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        EmergencyInformationId entity = (EmergencyInformationId) o;
        return Objects.equals(this.activityId, entity.activityId) &&
                Objects.equals(this.phoneNumber, entity.phoneNumber) &&
                Objects.equals(this.lockerNumber, entity.lockerNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(activityId, phoneNumber, lockerNumber);
    }

}