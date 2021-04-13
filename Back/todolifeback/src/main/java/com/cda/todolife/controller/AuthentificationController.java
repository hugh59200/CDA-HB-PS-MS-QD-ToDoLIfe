package com.cda.todolife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.security.LoginEtMotdepasseDto;
import com.cda.todolife.security.service.IJwtTokenService;

@RestController
public class AuthentificationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private IJwtTokenService jwtTokenService;

	@PostMapping("/login")
	public ResponseEntity<Object> authenticate(@RequestBody LoginEtMotdepasseDto loginEtMotdepasse) {

		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
				loginEtMotdepasse.getUsername(), loginEtMotdepasse.getPassword());
		Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

		if (authentication != null && authentication.isAuthenticated()) {
			String tokens = jwtTokenService.createTokens(authentication);
			return ResponseEntity.ok().body(tokens);
		}

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(HttpStatus.UNAUTHORIZED.getReasonPhrase());
	}

}
