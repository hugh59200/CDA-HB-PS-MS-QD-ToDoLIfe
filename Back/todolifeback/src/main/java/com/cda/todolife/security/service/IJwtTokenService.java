package com.cda.todolife.security.service;

import org.springframework.security.core.Authentication;

import io.jsonwebtoken.JwtException;

public interface IJwtTokenService {

    String createTokens(Authentication authentication);

	Authentication validateJwtToken(String bearerToken) throws JwtException;
}
