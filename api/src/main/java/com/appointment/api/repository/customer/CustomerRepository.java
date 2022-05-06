package com.appointment.api.repository.customer;

import com.appointment.api.model.Customer;
import java.text.MessageFormat;

public class CustomerRepository {
    // TODO Find how to use DId sql
    public void addCustomer (Customer customer){
        String query  = MessageFormat.format(
                "INSERT INTO customer(name, age, room_number, contact_phone, passwd) values ({1}, {2}, {3}, {4});",
                customer.getName(),
                customer.getAge(),
                customer.getRoomNumber(),
                customer.getContactPhone()
        );
    }
}
