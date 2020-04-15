package com.theitcrowd.todo.model.forms;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserLoginForm {

    @NotNull
    @Size(min = 3, max = 254)
    @Email
    private String email;

    @NotNull
    @Size(min = 8, max = 254)
    private String password;

    public UserLoginForm(@JsonProperty("email") String email, @JsonProperty("password") String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String toString() {
        return "UserLoginForm(email: " + email + ", password: " + password + ")";
    }
}