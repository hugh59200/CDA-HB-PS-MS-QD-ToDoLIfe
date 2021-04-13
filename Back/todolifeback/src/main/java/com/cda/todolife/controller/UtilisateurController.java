package com.cda.todolife.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.exception.ResourceAlreadyExist;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.service.IUtilisateurService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class UtilisateurController {

	@Autowired
	private IUtilisateurService utilisateurService;
	@Autowired
	private PasswordEncoder encoder;

	// get all
	@GetMapping("/utilisateurs")
	public List<UtilisateurDtoList> getAll() {
		return this.utilisateurService.list();
	}

	// create
	@PostMapping("/utilisateurs")
	public ResponseEntity<UtilisateurDto> create(@RequestBody UtilisateurDto utilisateurDto)
			throws ResourceAlreadyExist {
		try {
			String hashedPwd = this.encoder.encode((utilisateurDto.getPassword()));
			utilisateurDto.setPassword(hashedPwd);
			this.utilisateurService.create(utilisateurDto);
		} catch (ResourceAlreadyExist e) {
		}
		return ResponseEntity.ok(utilisateurDto);
	}

//get by id
	@GetMapping("/utilisateurs/{id}")
	public ResponseEntity<UtilisateurDto> getById(@PathVariable int id) throws ResourceNotFoundException {

		try {
			return new ResponseEntity<>(this.utilisateurService.show(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// update
	@PutMapping("/utilisateurs")
	public ResponseEntity<HttpStatus> update(@RequestBody UtilisateurDto utilisateurDto) throws ResourceAlreadyExist {
		try {
			utilisateurService.update(utilisateurDto);
			return ResponseEntity.status(HttpStatus.OK).build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

	// delete
	@DeleteMapping("/utilisateurs/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable int id) throws ResourceAlreadyExist {
		try {
			this.utilisateurService.delete(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(ConstraintViolationException.class)
	public Map<String, String> handleValidationExceptions(ConstraintViolationException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getConstraintViolations().forEach(constraintViolation -> {
			String fieldName = constraintViolation.getPropertyPath().toString();
			fieldName = fieldName.substring(fieldName.lastIndexOf('.') + 1);
			String errorMessage = constraintViolation.getMessage();
			errors.put(fieldName, errorMessage);
		});
		return errors;
	}

}