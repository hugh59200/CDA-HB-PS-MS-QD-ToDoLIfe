package com.cda.todolife.controller.sport;

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

import com.cda.todolife.dto.sport.StatistiquesSportivesDto;
import com.cda.todolife.exception.sport.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.sport.StatistiquesSportivesIntrouvables;
import com.cda.todolife.service.sport.IStatistiquesSportivesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class StatistiquesSportivesController {

	@Autowired
	IStatistiquesSportivesService statistiquesSportivesService;

	// create
	@PostMapping("/statistiquesSport")
	public ResponseEntity<StatistiquesSportivesDto> create(@RequestBody StatistiquesSportivesDto stats)
			throws StatistiquesSportivesExistantes {
		try {
			this.statistiquesSportivesService.add(stats);
		} catch (StatistiquesSportivesExistantes e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(stats);
	}

	// delete
	@DeleteMapping("/statistiquesSport/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws StatistiquesSportivesIntrouvables {
		try {
			this.statistiquesSportivesService.deleteById(id);
		} catch (StatistiquesSportivesIntrouvables e) {
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/statistiquesSport")
	public ResponseEntity<StatistiquesSportivesDto> update(@RequestBody StatistiquesSportivesDto stats)
			throws StatistiquesSportivesIntrouvables {
		try {
			this.statistiquesSportivesService.update(stats);
		} catch (StatistiquesSportivesIntrouvables e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(stats);
	}

	// findById
	@GetMapping("/statistiquesSport/id/{id}")
	public ResponseEntity<StatistiquesSportivesDto> findById(@PathVariable int id)
			throws StatistiquesSportivesIntrouvables {
		
		StatistiquesSportivesDto stats = null;
		try {
			stats = this.statistiquesSportivesService.findById(id);
		} catch (StatistiquesSportivesIntrouvables e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(stats);
	}

	// findByStatId
	@GetMapping("statistiquesSport/stat/{id}")
	public ResponseEntity<List<StatistiquesSportivesDto>> findByStatId(@PathVariable int id)
			throws StatistiquesSportivesIntrouvables {
		List<StatistiquesSportivesDto> stats = null;
		try {
			stats = statistiquesSportivesService.findByStatId(id);
		} catch (StatistiquesSportivesIntrouvables e) {
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
