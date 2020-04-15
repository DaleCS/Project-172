package com.theitcrowd.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.theitcrowd.todo.model.User;
import com.theitcrowd.todo.dao.UserDAO;
import com.theitcrowd.todo.model.forms.UserRegistrationForm;

import java.util.List;

import javax.transaction.Transactional;

@Service
public class UserService {

    private final UserDAO userDAO;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(@Qualifier("userdao") UserDAO userDAO) {
        this.userDAO = userDAO;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @Transactional
    public boolean registerUser(UserRegistrationForm userRegistrationForm) {
        final List<User> existingUser = this.userDAO.checkExistingUser(userRegistrationForm.getEmail(),
                userRegistrationForm.getUsername());
        if (existingUser.size() > 0) {
            return false;
        }

        // TODO: Sanitize the password

        // Hash the password using SHA-1 algorithm
        String hashedPassword = passwordEncoder.encode(userRegistrationForm.getPassword());

        // Query the database to add the new user
        this.userDAO.insertNewUser(userRegistrationForm.getEmail(), hashedPassword, userRegistrationForm.getUsername());

        return true;
    }
}