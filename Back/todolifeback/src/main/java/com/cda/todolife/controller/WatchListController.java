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

import com.cda.todolife.dto.watchlist.WatchListDto;
import com.cda.todolife.exception.WatchListExistanteException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.service.IWatchListService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class WatchListController {

	@Autowired
	private IWatchListService watchListService;

	// listing
	@GetMapping("/watchlists")
	public List<WatchListDto> getAll() {
		return this.watchListService.findAll();
	}

	// create
	@PostMapping("/watchlists/utilisateurs/{id}")
	public ResponseEntity<WatchListDto> create(@RequestBody WatchListDto watchListDto, @PathVariable int id)
			throws WatchListIntrouvableException {
		try {

			this.watchListService.add(watchListDto, id);
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(watchListDto);
	}

	// details by Id
	@GetMapping("/watchlists/utilisateurs/{id}")
	public ResponseEntity<Boolean> getByIdUtilisateur(@PathVariable int id) throws WatchListIntrouvableException {

		try {
			return new ResponseEntity<>(watchListService.findByIdUtilisateur(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

	// details by label
	@GetMapping("/watchlists/{label}")
	public ResponseEntity<WatchListDto> getByLabel(@PathVariable String label) throws WatchListIntrouvableException {
		WatchListDto watchListDto = watchListService.findByLabel(label);
		return ResponseEntity.ok(watchListDto);
	}

	// update
	@PutMapping("/watchlists")
	public ResponseEntity<WatchListDto> update(@RequestBody WatchListDto watchListDto)
			throws WatchListIntrouvableException {
		try {
			watchListService.update(watchListDto);
		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(watchListDto);
	}

	// delete
	@DeleteMapping("/watchlists/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws WatchListIntrouvableException {
		watchListService.deleteById(id);
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