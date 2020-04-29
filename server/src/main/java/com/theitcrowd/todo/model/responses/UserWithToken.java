package com.theitcrowd.todo.model.responses;

import com.theitcrowd.todo.model.User;

public class UserWithToken {
    private class UserWithoutPassword {
        private long userId;
        private String email;
        private String username;
        private String creationDate;

        public UserWithoutPassword(long userId, String email, String username, String creationDate) {
            this.userId = userId;
            this.email = email;
            this.username = username;
            this.creationDate = creationDate;
        }

        public long getUserId() {
            return userId;
        }

        public String getEmail() {
            return email;
        }

        public String getUsername() {
            return username;
        }

        public String getCreationDate() {
            return creationDate;
        }

        public String toString() {
            return "UserWithoutPassword(userId: " + userId + ", email: " + email + ", username: " + username
                    + ", creationDate: " + creationDate + ")";
        }
    }

    private final String token;
    private final UserWithoutPassword user;

    public UserWithToken(String token, User user) {
        this.token = token;
        this.user = new UserWithoutPassword(user.getId(), user.getEmail(), user.getUsername(), user.getCreationDate());
    }

    public String getToken() {
        return token;
    }

    public UserWithoutPassword getUser() {
        return user;
    }

    public String toString() {
        return "UserWithToken(token: " + token + ", user: " + user + ")";
    }
}