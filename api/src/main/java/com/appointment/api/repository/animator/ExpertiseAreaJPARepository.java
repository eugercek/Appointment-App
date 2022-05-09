package com.appointment.api.repository.animator;

import com.appointment.api.model.ExpertiseArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExpertiseAreaJPARepository extends JpaRepository<ExpertiseArea, Integer> {
    @Query(value = "select * from expertise_area",
            nativeQuery = true)
    List<ExpertiseArea> getExpertiseAreas();

    @Modifying
    @Query(value = "INSERT INTO expertise_area(name) values (:#{#exper.name});", nativeQuery = true)
    int addExpertiseArea(@Param("exper") ExpertiseArea exper);
}
