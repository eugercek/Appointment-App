package com.appointment.api.repository.animator;

import com.appointment.api.model.Animator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnimatorJPARepository extends JpaRepository<Animator, Integer> {
    @Query(value = "SELECT * FROM animator where employee_id = :id", nativeQuery = true)
    Animator getAnimatorById(int id);

    @Query(value = "select * from animator a inner join expertise_area e on a.expertise_area = e.id ",
            nativeQuery = true)
    List<Animator> getAnimators();

    @Modifying
    @Query(value = "INSERT INTO animator(name, phone_number, expertise_area) values (:#{#animator.name},:#{#animator.phoneNumber},:#{#animator.expertiseArea});", nativeQuery = true)
    int addAnimator(@Param("animator") Animator animator);

    @Modifying
    @Query(value = "INSERT INTO animator(employee_id ,name, phone_number, expertise_area) values (:#{#animator.id},:#{#animator.name},:#{#animator.phoneNumber},:#{#animator.expertiseArea});", nativeQuery = true)
    int addAnimatorWithId(@Param("animator") Animator animator);
}
