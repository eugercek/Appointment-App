package com.appointment.api.model;

import javax.persistence.*;

@Entity
@Table(name = "expertise_area")
public class ExpertiseArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, length = 20)
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ExpertiseArea(){
    }
    public ExpertiseArea(int id){
        this.id = id;
    }
}