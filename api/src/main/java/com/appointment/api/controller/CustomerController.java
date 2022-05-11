package com.appointment.api.controller;

import com.appointment.api.model.Customer;
import com.appointment.api.model.Token;
import com.appointment.api.repository.customer.CustomerJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
    @Autowired
    private CustomerJPARepository repo;

    @GetMapping("")
    public List<Customer> getCustomers(){
        try {
            List<Customer> customers = repo.getCustomers();
            return customers;
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create customer.");
        }
    }

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable int id){
        try {
            Customer customer = repo.getCustomersById(id);
            return customer;
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create customer.");
        }
    }



    // Password is added via trigger in database.
    @PostMapping("")
    @Transactional
    public void saveCustomer(@RequestBody  Customer customer){
        try {
            // -1 is convention for not entered ID
            if(customer.getId() == -1){
                repo.addCustomer(customer) ;
            }
            else {
                repo.addCustomerWithId(customer);
            }
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not create customer.");
        }
    }

    @PostMapping("/login")
    public int loginCustomer(@RequestBody Token token) {
        try {
            Customer customer = repo.getCustomerByPhoneNumber(token.getPhone());
            System.out.println(customer.getContactPhone());
            if(customer == null || !customer.getPasswd().equals(token.getPassword())){
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "Error");
            }

            return (int) (Math.random() * 10000);
        }catch (Exception e){
            System.out.println(e.getMessage());
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Error");
        }
    }

    @GetMapping("/children")
    public Object[] getChildrenActivities(){
        try {
            return repo.getChildrenActivities();
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Can not get activities.");
        }
    }
}
