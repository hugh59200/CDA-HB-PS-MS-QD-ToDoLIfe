package com.cda.todolife.security.service;

import java.security.Key;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.DefaultClaims;

@Service
public class JwtTokenServiceImpl implements IJwtTokenService {

	@Value("${jwt.key}")
	private String jwtCle;

	@Override
	public String createTokens(Authentication authentication) {
		User user = (User) authentication.getPrincipal();

		Claims claims = new DefaultClaims();

		claims.setSubject(String.valueOf(user.getUsername()));
		claims.put("username", user.getUsername());
		claims.put("roles", String.join(",", AuthorityUtils.authorityListToSet(user.getAuthorities())));

		return Jwts.builder().signWith(SignatureAlgorithm.HS512, jwtCle.getBytes()).setClaims(claims)
				.setExpiration(Date.from(
						LocalDateTime.now().plus(1, ChronoUnit.MINUTES).atZone(ZoneId.systemDefault()).toInstant()))
				.setIssuedAt(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant())).compact();
	}

	@Override
	public Authentication validateJwtToken(String bearerToken) {
		Key vKey = new SecretKeySpec(jwtCle.getBytes(), SignatureAlgorithm.HS512.getJcaName());

		Jws<Claims> claims = Jwts.parser().setSigningKey(vKey).parseClaimsJws(bearerToken);

		return new UsernamePasswordAuthenticationToken(claims.getBody().getSubject(), "",
				AuthorityUtils.commaSeparatedStringToAuthorityList(claims.getBody().get("roles", String.class)));
	}

}
