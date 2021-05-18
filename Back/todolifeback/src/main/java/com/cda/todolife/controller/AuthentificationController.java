package com.cda.todolife.controller;

import java.util.HashMap;
import java.util.LinkedHashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.security.LoginEtMotdepasseDto;
import com.cda.todolife.security.service.IJwtTokenService;
import com.cda.todolife.service.IUtilisateurService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
@RestController
public class AuthentificationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private IJwtTokenService jwtTokenService;

	@Autowired
	private IUtilisateurService userService;

	@GetMapping("/notAutorized")
	public String error() {
		return "notAutorized";
	}

	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@RequestBody LoginEtMotdepasseDto loginAndPasswordDto)
			throws ResourceNotFoundException {
		System.out.println(loginAndPasswordDto);
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
				loginAndPasswordDto.getUsername(), loginAndPasswordDto.getPassword());
		Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
		if (authentication != null && authentication.isAuthenticated()) {
			String token = jwtTokenService.createTokens(authentication);
			UtilisateurDto currentUserDto = this.userService.findByUsername(authentication.getName());
			currentUserDto.setToken(token);
			HashMap<String, UtilisateurDto> responseBody = new LinkedHashMap<>();
			responseBody.put("user", currentUserDto);
			return ResponseEntity.ok().body(responseBody);
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(HttpStatus.UNAUTHORIZED.getReasonPhrase());
	}

	@GetMapping("/logout")
	public String logout(HttpServletRequest request) throws ServletException {
		request.logout();
		return "redirect:/login";
	}
}
