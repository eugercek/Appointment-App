package com.appointment.api.repository;

import com.appointment.api.model.Customer;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.text.MessageFormat;
import java.util.List;

@Repository
@AllArgsConstructor
public class CustomerRepository {
    // TODO Find how to use DId sql
    @Autowired
    private EntityManager entityManager;

    public void addCustomer (Customer customer){
        String query  = MessageFormat.format(
                "INSERT INTO customer(name, age, room_number, contact_phone, passwd) values ({0},{1}, {2},{3},{4});",
                "'" + customer.getName() + "'",
                customer.getAge(),
                customer.getRoomNumber(),
                customer.getContactPhone(),
                "'pass'"
        );


        entityManager.createNativeQuery(query).executeUpdate();
    }
}
