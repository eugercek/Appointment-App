package com.appointment.api.repository.customer;

import com.appointment.api.model.Customer;
import org.hibernate.annotations.SQLInsert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerJPARepository extends JpaRepository<Customer, Integer> {
    @Query(value = "SELECT * FROM customer where id = :id", nativeQuery = true)
    Customer getCustomersById(int id);

    @Query(value = "SELECT * FROM customer", nativeQuery = true)
    List<Customer> getCustomers();

    @Modifying
    @Query(value ="INSERT INTO customer(name, age, room_number, contact_phone, passwd) values (:#{#customer.name},:#{#customer.age},:#{#customer.roomNumber},:#{#customer.contactPhone},:#{#customer.passwd} );", nativeQuery = true)
    int addCustomer(@Param("customer") Customer customer);

    @Modifying
    @Query(value ="INSERT INTO customer(id, name, age, room_number, contact_phone, passwd) values (:#{#customer.id},:#{#customer.name},:#{#customer.age},:#{#customer.roomNumber},:#{#customer.contactPhone},:#{#customer.passwd} );", nativeQuery = true)
    int addCustomerWithId(@Param("customer") Customer customer);
}
