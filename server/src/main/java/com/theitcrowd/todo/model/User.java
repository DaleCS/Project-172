package com.theitcrowd.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    @NotNull
    private String email;
    @NotNull
    private String passwordHash;
    @NotNull
    private String username;
    private String creationDate;

    public User() {
    }

    public User(Long userId, String email, String passwordHash, String username, String creationDate) {
        this.userId = userId;
        this.email = email;
        this.passwordHash = passwordHash;
        this.username = username;
        this.creationDate = creationDate;
    }

    public Long getId() {
        return userId;
    }

    public String getEmail() {
        return email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public String getUsername() {
        return username;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public String toString() {
        return "User(user_id: " + userId + ", email: " + email + ", password_hash: " + passwordHash + ", username: "
                + username + ", creation_date: " + creationDate + ")";
    }
}