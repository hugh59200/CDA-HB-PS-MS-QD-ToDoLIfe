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

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.exception.JourExistantException;
import com.cda.todolife.exception.JourIntrouvableException;
import com.cda.todolife.service.IJourService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class JourController {

	@Autowired
	private IJourService jourService;

	// listing
	@GetMapping("/jour")
	public List<JourDto> getAll() {
		return this.jourService.findAll();
	}

	// create
	@PostMapping("/jour")
	public ResponseEntity<JourDto> create(@RequestBody JourDto list) throws JourExistantException {
		try {
			this.jourService.add(list);
		} catch (JourExistantException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(list);
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

//	// lister jour by userId selon date
//	@GetMapping("/utilisateurs/{id}/journaux/")
//	public ResponseEntity<List<JourDto>> findAllByJournalUtilisateurIdUtilisateur(
//			
//			@PathVariable(value="id") int idUtilisateur,
//			@RequestParam(value="mois") int mois,
//			@RequestParam(value="annee") int annee){
//			
////		String date = "2021-02-22";
//		String date = annee + "-" + mois;
//		String startDate = date.substring(0, 7) + "-00";
//		String endDate = date.substring(0, 7) + "-30";
//		System.out.println(startDate);
//		System.out.println(endDate);
//		List<JourDto> listJours = jourService.findAllByJournalUtilisateurIdUtilisateurAndStartDateLessThanEqualAndEndDateGreaterThanEqual(idUtilisateur, startDate, endDate);
//		return ResponseEntity.ok(listJours);
//	}

//	// lister jour by userId selon date
//	@GetMapping("/utilisateurs/{id}/journaux/")
//	public ResponseEntity<List<JourDto>> findAllByJournalUtilisateurIdUtilisateur(
//			
//			@PathVariable(value="id") int idUtilisateur,
//			@RequestParam(value="mois") int mois,
//			@RequestParam(value="annee") int annee){
//			
//		
//		String date = "2021-02-22";
//		List<JourDto> listJours = jourService.findAllByJournalUtilisateurIdUtilisateurAndDateJour(idUtilisateur, date);
//		return ResponseEntity.ok(listJours);
//	}

	// lister jour by userId
	@GetMapping("/utilisateurs/{id}/journaux")
	public ResponseEntity<List<JourDto>> findAllByJournalUtilisateurIdUtilisateur(
			@PathVariable(value = "id") int idUtilisateur) {
		List<JourDto> listJours = jourService.findAllByJournalUtilisateurIdUtilisateur(idUtilisateur);
		return ResponseEntity.ok(listJours);
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