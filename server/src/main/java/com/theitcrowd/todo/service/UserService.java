package com.theitcrowd.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import com.theitcrowd.todo.model.User;
import com.theitcrowd.todo.model.responses.UserWithToken;
import com.theitcrowd.todo.model.forms.UserRegistrationForm;
import com.theitcrowd.todo.model.forms.UserLoginForm;
import com.theitcrowd.todo.dao.UserDAO;
import com.theitcrowd.todo.auth.JWTUtil;

import java.util.List;

@Service
public class UserService {

    private final UserDAO userDAO;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JWTUtil jwt;

    @Autowired
    public UserService(@Qualifier("userdao") UserDAO userDAO) {
        this.userDAO = userDAO;
        this.passwordEncoder = new BCryptPasswordEncoder();
        this.jwt = new JWTUtil();
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

    @Transactional
    public UserWithToken loginUser(UserLoginForm userLoginForm) {
        final List<User> findUser = this.userDAO.findUser(userLoginForm.getEmail());
        if (findUser.size() == 1) {
            User possibleUser = findUser.get(0);
            if (passwordEncoder.matches(userLoginForm.getPassword(), possibleUser.getPasswordHash())) {
                String newToken = jwt.generateToken(possibleUser);
                return new UserWithToken(newToken, possibleUser);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}