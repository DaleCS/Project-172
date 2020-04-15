/**
 * The following video by Java Brains was used as a guide during the writing of this portion of the code.
 * https://www.youtube.com/watch?v=X80nJ5T7YpE
 */

package com.theitcrowd.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.theitcrowd.todo.auth.JWTRequestFilter;
import com.theitcrowd.todo.auth.UserAuthDetailsService;

@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserAuthDetailsService userAuthDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userAuthDetailsService);
    }

    @Autowired
    private JWTRequestFilter jwtFilter;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        // CSRF support is disabled during development phase
        http.csrf().disable().authorizeRequests().antMatchers("/api/user/*").permitAll().anyRequest().authenticated()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}