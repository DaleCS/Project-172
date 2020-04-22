/**
 * The following video by Java Brains was used as a guide during the writing of this portion of the code.
 * https://www.youtube.com/watch?v=X80nJ5T7YpE
 */

package com.theitcrowd.todo.auth;

import com.theitcrowd.todo.model.User;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JWTUtil {

    // TODO: THIS SECRET MUST BE SEPERATED IN PRODUCTION!!!
    private String SECRET_KEY = "t#*ed2srB6&E*L@mR&t#t4x&Lrb4GGa%E&siiaY!R39pmuA2w82D^ocPMWy$yfgW6WQC3v3&N7u3^5#nn6S5GBp5!$e8!k3@jtn9a$JUHGgKngB&zxWtSUqcdt3$d3eH";

    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(User userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getEmail());
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(String.valueOf(subject))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public Boolean verifyToken(String token, UserDetails user) {
        final String email = extractEmail(token);
        return (email.equals(user.getUsername()) && !isTokenExpired(token));
    }
}