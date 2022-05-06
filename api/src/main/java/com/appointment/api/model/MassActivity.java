package com.appointment.api.model;

import javax.persistence.*;

@Entity
@Table(name = "mass_activity")
public class MassActivity {
    @Id
    @Column(name = "activity_id", nullable = false)
    private Integer id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "activity_id", nullable = false)
    private Activity activity;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "mass_activity_type_id", nullable = false)
    private MassActivityType massActivityType;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public MassActivityType getMassActivityType() {
        return massActivityType;
    }

    public void setMassActivityType(MassActivityType massActivityType) {
        this.massActivityType = massActivityType;
    }

}