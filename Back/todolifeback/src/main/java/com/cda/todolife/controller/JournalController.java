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

import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.service.IJournalService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class JournalController {

	@Autowired
	private IJournalService journalService;

	// test par savoir si un utilisateur possede un journal
	@GetMapping("/journaux/{id}/exist")
	public ResponseEntity<Boolean> testJourPresence(@PathVariable(value = "id") int idUtilisateur) {
		return ResponseEntity.ok(journalService.findIfJournalExist(idUtilisateur));
	}

	// listing
	@GetMapping("/journaux")
	public List<JournalDto> getAll() {
		System.out.println(journalService.findAll());
		return this.journalService.findAll();
	}

	// create
	@PostMapping("/journaux")
	public ResponseEntity<JournalDto> create(@RequestBody JournalDto journalDto) throws JournalExistantException {
		try {
			this.journalService.add(journalDto);
		} catch (JournalExistantException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(journalDto);
	}

	// details by Id
	@GetMapping("/journaux/{id}")
	public ResponseEntity<JournalDto> getById(@PathVariable int id) throws JournalIntrouvableException {
		JournalDto list = journalService.findById(id);
		return ResponseEntity.ok(list);
	}

	// update
	@PutMapping("/journaux")
	public ResponseEntity<JournalDto> update(@RequestBody JournalDto journalDto) throws JournalIntrouvableException {
		try {
			journalService.update(journalDto);
		} catch (JournalIntrouvableException e) {
			e.printStackTrace();
		} catch (JournalExistantException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(journalDto);
	}

	// delete
	@DeleteMapping("/journaux/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws JournalIntrouvableException {
		journalService.deleteById(id);
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