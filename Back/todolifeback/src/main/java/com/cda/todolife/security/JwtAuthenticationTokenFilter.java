package com.cda.todolife.security;

import java.io.IOException;
import java.util.Enumeration;
import java.util.Optional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import com.cda.todolife.security.service.IJwtTokenService;

import io.jsonwebtoken.JwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtAuthenticationTokenFilter extends GenericFilterBean {

	@Autowired
    private IJwtTokenService jwtTokenService;
	
	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
			throws IOException, ServletException {

		final HttpServletRequest request = (HttpServletRequest) servletRequest;

		Enumeration<String> headers = request.getHeaders(HttpHeaders.AUTHORIZATION);

		final Optional<String> token = Optional.ofNullable(headers == null || !headers.hasMoreElements() ? null : headers.nextElement());

		if (token.isPresent() && token.get().startsWith("Bearer")) {
			String bearerToken = token.get().substring("Bearer".length()+1);
			
			try {
					
				Authentication authentication = jwtTokenService.validateJwtToken(bearerToken);
				
				SecurityContextHolder.getContext().setAuthentication(authentication);
			
			} catch (JwtException e) {
				log.warn("erreur token {}",bearerToken);
				((HttpServletResponse) servletResponse).sendError(HttpServletResponse.SC_UNAUTHORIZED, "token invalide");
                return;
			}
		}

		chain.doFilter(servletRequest, servletResponse);
		SecurityContextHolder.getContext().setAuthentication(null); // Clean authentication after process

	}

}