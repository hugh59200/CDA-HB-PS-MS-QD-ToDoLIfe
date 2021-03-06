package com.cda.todolife.controller.sport;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.sport.StatistiquesGeneralesDto;
import com.cda.todolife.exception.sport.StatistiquesGeneralesExistantes;
import com.cda.todolife.exception.sport.StatistiquesGeneralesIntrouvables;
import com.cda.todolife.service.sport.IStatistiquesGeneralesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class StatistiquesGeneralesController {
	
	@Autowired
	IStatistiquesGeneralesService statistiquesGeneralesService;

	// create
	@PostMapping("/statistiquesGen")
	public ResponseEntity<StatistiquesGeneralesDto> create(@RequestBody StatistiquesGeneralesDto stats)
			throws StatistiquesGeneralesExistantes {
		
		System.out.println(stats);
		
		try {
			this.statistiquesGeneralesService.add(stats);
		} catch (StatistiquesGeneralesExistantes e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return ResponseEntity.ok(stats);
	}

	// delete
	@DeleteMapping("/statistiquesGen/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws StatistiquesGeneralesIntrouvables {
		try {
			statistiquesGeneralesService.deleteById(id);
		} catch (StatistiquesGeneralesIntrouvables e) {
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/statistiquesGen")
	public ResponseEntity<StatistiquesGeneralesDto> update(@RequestBody StatistiquesGeneralesDto stats)
			throws StatistiquesGeneralesIntrouvables {
		
//		System.out.println(stats);
		
		
		try {
			statistiquesGeneralesService.update(stats);
		} catch (StatistiquesGeneralesIntrouvables e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(stats);
	}

	// findByStatId
	@GetMapping("statistiquesGen/stat/{id}")
	public ResponseEntity<StatistiquesGeneralesDto> findByStatId(@PathVariable int id)
			throws StatistiquesGeneralesIntrouvables {
		StatistiquesGeneralesDto stats = null;
		
		System.out.println("id =>"+id);

		try {
			stats = statistiquesGeneralesService.FindByStatId(id);
		} catch (StatistiquesGeneralesIntrouvables e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
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
