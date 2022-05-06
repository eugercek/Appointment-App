package com.appointment.api.controller;

import com.appointment.api.model.Customer;
import com.appointment.api.repository.customer.CustomerRepository;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerAPI {
    private CustomerRepository repo = new CustomerRepository();



    public static <T> String printObject(T t) {
        StringBuilder sb = new StringBuilder();

        for (Field field : t.getClass().getDeclaredFields()) {
            field.setAccessible(true);

            try {
                sb.append(field.getName()).append(": ").append(field.get(t)).append('\n');
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return sb.toString();
    }

    @GetMapping("/{id}")
    public String getCustomer(){
        return "Customers";
    }

    @PostMapping("/hi")
    public void saveCustomer(@RequestBody  Customer customer){
        System.out.println(printObject(customer));
        repo.addCustomer(customer);

    }
}
