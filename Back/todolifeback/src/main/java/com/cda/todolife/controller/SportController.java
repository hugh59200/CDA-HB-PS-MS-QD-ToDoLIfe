package com.cda.todolife.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.cda.todolife.dto.SportDto;
import com.cda.todolife.exception.SportExistant;
import com.cda.todolife.exception.SportIntrouvable;
import com.cda.todolife.service.ISportService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class SportController {

	@Autowired
	ISportService sportService;

	// liste
	@GetMapping("/sports")
	public List<SportDto> getAll() {
		return this.sportService.findAll();
	}

	// create
	@PostMapping("/sports")
	public ResponseEntity<SportDto> create(@RequestBody SportDto sport) throws SportExistant {
		try {
			this.sportService.add(sport);
		} catch (SportExistant e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(sport);
	}

	// delete
	@DeleteMapping("/sport/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws SportIntrouvable {
		try {
			sportService.deleteById(id);
		} catch (SportIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/sports")
	public ResponseEntity<SportDto> update(@RequestBody SportDto sport) throws SportIntrouvable {
		try {
			sportService.update(sport);
		} catch (SportIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(sport);
	}

	// findByLabel
	@GetMapping("sports/label/{label}")
	public ResponseEntity<SportDto> findByLabel(@PathVariable String label) throws SportIntrouvable {
		SportDto sport = null;

		try {
			sport = sportService.FindByLabel(label);
		} catch (SportIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(sport);
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
