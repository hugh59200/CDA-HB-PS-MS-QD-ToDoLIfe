package com.cda.todolife.controller;

import java.util.HashMap;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.StatistiquesDto;
import com.cda.todolife.exception.StatistiquesExistantes;
import com.cda.todolife.exception.StatistiquesIntrouvables;
import com.cda.todolife.service.IStatistiquesService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class StatistiquesController {

	@Autowired
	IStatistiquesService statistiquesService;

	// create
	@PostMapping("/statistiques")
	public ResponseEntity<StatistiquesDto> create(@RequestBody StatistiquesDto stats) throws StatistiquesExistantes {
		try {
			this.statistiquesService.add(stats);
		} catch (StatistiquesExistantes e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(stats);
	}

	// delete
	@DeleteMapping("/statistiques/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws StatistiquesIntrouvables {
		try {
			statistiquesService.deleteById(id);
		} catch (StatistiquesIntrouvables e) {
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

//	// update
//	@PutMapping("/statistiques")
//	public ResponseEntity<StatistiquesDto> update(@RequestBody StatistiquesDto stats) throws StatistiquesIntrouvables {
//		try {
//			statistiquesService.update(stats);
//		} catch (StatistiquesIntrouvables e) {
//			e.printStackTrace();
//		}
//		return ResponseEntity.ok(stats);
//	}

	// findByUserId
	@GetMapping("/statistiques/utilisateur/{id}")
	public ResponseEntity<StatistiquesDto> showListByUserId(@PathVariable int id) throws StatistiquesIntrouvables {
		StatistiquesDto stats = null;

		try {
			stats = this.statistiquesService.FindStatistiquesByUserId(id);
		} catch (StatistiquesIntrouvables e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(stats);
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
