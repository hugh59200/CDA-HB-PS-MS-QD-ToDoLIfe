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

import com.cda.todolife.dto.TacheDto;
import com.cda.todolife.exception.TacheExistanteException;
import com.cda.todolife.exception.TacheIntrouvableException;
import com.cda.todolife.service.ITacheService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class TacheController {

	@Autowired
	private ITacheService tacheService;

	// listing
	@GetMapping("/taches")
	public List<TacheDto> getAll() {
		return this.tacheService.findAll();
	}

	// create
	@PostMapping("/taches")
	public ResponseEntity<TacheDto> create(@RequestBody TacheDto tache) throws TacheExistanteException {
		try {
			this.tacheService.add(tache);
		} catch (TacheExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(tache);
	}

	// details by Id
	@GetMapping("/taches/id/{id}")
	public ResponseEntity<TacheDto> getById(@PathVariable int id) throws TacheIntrouvableException {
		TacheDto tache = tacheService.findById(id);
		return ResponseEntity.ok(tache);
	}

	// details by Label
	@GetMapping("/taches/label/{label}")
	public ResponseEntity<TacheDto> getByName(@PathVariable String label) throws TacheIntrouvableException {
		TacheDto tache = tacheService.findByLabel(label);
		return ResponseEntity.ok(tache);
	}

	// update
	@PutMapping("/taches")
	public ResponseEntity<TacheDto> update(@RequestBody TacheDto tache) throws TacheIntrouvableException {
		try {
			tacheService.update(tache);
		} catch (TacheIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TacheExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(tache);
	}

	// delete
	@DeleteMapping("/taches/id/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws TacheIntrouvableException {
		tacheService.deleteById(id);
		System.out.println("ok");
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
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