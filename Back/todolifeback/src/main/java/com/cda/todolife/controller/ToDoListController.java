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

import com.cda.todolife.dto.ToDoListDto;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.exception.ToDoListExistanteException;
import com.cda.todolife.exception.ToDoListIntrouvableException;
import com.cda.todolife.service.IToDoListService;
import com.cda.todolife.service.IUtilisateurService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class ToDoListController {

	@Autowired
	private IToDoListService todolistService;
	
	@Autowired
	private IUtilisateurService utilisateurService;

	// listing
	@GetMapping("/todolists")
	public List<ToDoListDto> getAll() {
		return this.todolistService.findAll();
	}

 	// create
	@PostMapping("/todolists/utilisateurs/{id}")
	public ResponseEntity<ToDoListDto> create(@RequestBody ToDoListDto list, @PathVariable int id) throws ToDoListExistanteException {
		try {
			this.utilisateurService.findById(id);
			this.todolistService.add(list);
		} catch (ToDoListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ResourceNotFoundException e) {
			// TODO: handle exception
		}
		return ResponseEntity.ok(list);
	}

	// details by Id
	@GetMapping("/todolists/id/{id}")
	public ResponseEntity<ToDoListDto> getById(@PathVariable int id) throws ToDoListIntrouvableException {
		ToDoListDto list = todolistService.findById(id);
		return ResponseEntity.ok(list);
	}

	// details by Label
	@GetMapping("/todolists/label/{label}")
	public ResponseEntity<ToDoListDto> getByName(@PathVariable String label) throws ToDoListIntrouvableException {
		ToDoListDto list = todolistService.findByLabel(label);
		return ResponseEntity.ok(list);
	}

	// update
	@PutMapping("/todolists")
	public ResponseEntity<ToDoListDto> update(@RequestBody ToDoListDto list) throws ToDoListIntrouvableException {
		try {
			todolistService.update(list);
		} catch (ToDoListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ToDoListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(list);
	}

	// delete
	@DeleteMapping("/todolists/id/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws ToDoListIntrouvableException {
		todolistService.deleteById(id);
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