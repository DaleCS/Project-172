package com.theitcrowd.todo.model.forms;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserRegistrationForm {

    @NotNull
    @Size(min = 3, max = 254)
    @Email
    private String email;

    @NotNull
    @Size(min = 8, max = 254)
    private String password;

    @NotNull
    @Size(min = 6, max = 20)
    private String username;

    public UserRegistrationForm(@JsonProperty("email") String email, @JsonProperty("password") String password,
            @JsonProperty("username") String username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public String toString() {
        return "UserRegistrationForm(email: " + email + ", password: " + password + ", username: " + username + ")";
    }
}