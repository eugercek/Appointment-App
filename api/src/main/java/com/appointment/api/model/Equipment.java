package com.appointment.api.model;

import javax.persistence.*;

@Entity
@Table(name = "equipment")
public class Equipment {
    @Id
    @Column(name = "name", nullable = false, length = 20)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "equip_person_ssn", nullable = false)
    private EquipmentPerson equipPersonSsn;

    @Column(name = "purpose", nullable = false, length = 512)
    private String purpose;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public EquipmentPerson getEquipPersonSsn() {
        return equipPersonSsn;
    }

    public void setEquipPersonSsn(EquipmentPerson equipPersonSsn) {
        this.equipPersonSsn = equipPersonSsn;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

}