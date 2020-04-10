package com.theitcrowd.todo;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {

        // CSRF support is disabled during development phase
        http.csrf().disable().authorizeRequests().antMatchers(HttpMethod.POST, "/api/*").permitAll();
    }
}