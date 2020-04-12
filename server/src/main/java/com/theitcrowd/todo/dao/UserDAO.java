package com.theitcrowd.todo.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.theitcrowd.todo.model.User;

import java.util.List;

@Repository("userdao")
public interface UserDAO extends CrudRepository<User, Long> {

    @Query(value = "SELECT * FROM users WHERE email = ?1 OR username = ?2", nativeQuery = true)
    List<User> checkExistingUser(String email, String username);

    @Modifying
    @Query(value = "INSERT INTO users(email, password_hash, username) VALUES (?1, ?2, ?3)", nativeQuery = true)
    void insertNewUser(String email, String password_hash, String username);
}