/**
 * The following video by Java Brains was used as a guide during the writing of this portion of the code.
 * https://www.youtube.com/watch?v=X80nJ5T7YpE
 */

package com.theitcrowd.todo.auth;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.theitcrowd.todo.dao.UserDAO;
import com.theitcrowd.todo.model.User;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserAuthDetailsService implements UserDetailsService {

    @Autowired
    private final UserDAO userDao;

    @Autowired
    public UserAuthDetailsService(@Qualifier("userdao") UserDAO userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        List<User> queryResult = userDao.findUser(email);
        if (queryResult.size() == 1) {
            User user = queryResult.get(0);
            org.springframework.security.core.userdetails.User authUser = new org.springframework.security.core.userdetails.User(
                    email, user.getPasswordHash(), new ArrayList());
            return authUser;
        } else {
            throw new UsernameNotFoundException("User could not be recognized");
        }
    }
}