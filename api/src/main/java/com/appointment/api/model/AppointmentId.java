package com.appointment.api.model;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

@Embeddable
public class AppointmentId implements Serializable {
    private static final long serialVersionUID = 2866082826794130762L;
    @Column(name = "customer_id", nullable = false)
    private Integer customerId;

    @Column(name = "datetime", nullable = false)
    private Instant datetime;

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Instant getDatetime() {
        return datetime;
    }

    public void setDatetime(Instant datetime) {
        this.datetime = datetime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        AppointmentId entity = (AppointmentId) o;
        return Objects.equals(this.datetime, entity.datetime) &&
                Objects.equals(this.customerId, entity.customerId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(datetime, customerId);
    }

}