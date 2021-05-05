package com.cda.todolife.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.exception.JourExistantException;
import com.cda.todolife.exception.JourIntrouvableException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.service.IJourService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class JourController {

	@Autowired
	private IJourService jourService;

	// create by Id
	@PostMapping("/jour")
	public ResponseEntity<JourDto> createJourByUserId(@RequestBody JourDto jourDto, @RequestParam(value = "id") int id)
			throws ResourceNotFoundException {
		try {
			this.jourService.add(id, jourDto);
		} catch (JourExistantException e) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
		} catch (JournalIntrouvableException e) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
		}
		return ResponseEntity.ok(jourDto);
	}

	// details by Id
	@GetMapping("/jour/{id}")
	public ResponseEntity<JourDto> getById(@PathVariable int id) throws JourIntrouvableException {
		JourDto list = jourService.findById(id);
		return ResponseEntity.ok(list);
	}

	// details by titre
	@GetMapping("/jour/{findByTitre}")
	public ResponseEntity<JourDto> getByName(@PathVariable String titre) throws JourIntrouvableException {
		JourDto list = jourService.findByTitre(titre);
		return ResponseEntity.ok(list);
	}

	// test par savoir si un jour a été créér aujourd'hui
	@GetMapping("/jour/{id}/utilisateurs")
	public ResponseEntity<Boolean> testJourPresence(
			@PathVariable(value = "id") int idUtilisateur) {
		String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		boolean testJourPresence = jourService.findByJournalUtilisateurIdUtilisateurAndDateJour(idUtilisateur, date);
		return ResponseEntity.ok(testJourPresence);
	}
	
	
	// lister jour by userId selon date
	@GetMapping("/utilisateurs/{id}/journaux")
	public ResponseEntity<List<JourDto>> findAllByJournalUtilisateurIdUtilisateur(
			@PathVariable(value = "id") int idUtilisateur, @RequestParam(value = "mois") int mois,
			@RequestParam(value = "annee") int annee) {

		
		String dateNoDay = annee + "-" + mois;
		if (mois < 10) {
			dateNoDay = annee + "-0" + mois;
		}
		
		List<JourDto> listAll = jourService.findAllByJournalUtilisateurIdUtilisateur(idUtilisateur);
		List<JourDto> listMounth = new ArrayList<>();
		
		for (int i = 0; i < listAll.size(); i++) {
			if (listAll.get(i).getDateJour().contains(dateNoDay)) {
				listMounth.add(listAll.get(i));
			}
		}
		return ResponseEntity.ok(listMounth);
	}

	// update
	@PutMapping("/jour")
	public ResponseEntity<JourDto> update(@RequestBody JourDto list) throws JourIntrouvableException {
		try {
			jourService.update(list);
		} catch (JourIntrouvableException e) {
			e.printStackTrace();
		} catch (JourExistantException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(list);
	}

	// delete
	@DeleteMapping("/jour/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws JourIntrouvableException {
		jourService.deleteById(id);
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
