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

import com.cda.todolife.dto.SerieDto;
import com.cda.todolife.exception.SerieExistanteException;
import com.cda.todolife.exception.SerieIntrouvableException;
import com.cda.todolife.service.ISerieService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class SerieController {

	@Autowired
	private ISerieService serieService;

	// listing
	@GetMapping("/series")
	public List<SerieDto> getAll() {
		return this.serieService.findAll();
	}

	// create
	@PostMapping("/series")
	public ResponseEntity<SerieDto> create(@RequestBody SerieDto serieDto) throws SerieExistanteException {
		try {
			this.serieService.add(serieDto);
		} catch (SerieExistanteException e) {
			// TODO: handle exception
		}
		return ResponseEntity.ok(serieDto);
	}

	// details by Id
	@GetMapping("/series/id/{id}")
	public ResponseEntity<SerieDto> getById(@PathVariable int id) throws SerieIntrouvableException {
		SerieDto serieDto = serieService.findById(id);
		return ResponseEntity.ok(serieDto);
	}

	// details by Name
	@GetMapping("/series/name/{name}")
	public ResponseEntity<SerieDto> getByName(@PathVariable String name) throws SerieIntrouvableException {
		SerieDto serieDto = serieService.findByName(name);
		return ResponseEntity.ok(serieDto);
	}

	// details by saison
	@GetMapping("/series/saison/{saison}")
	public ResponseEntity<SerieDto> getBySaison(@PathVariable int saison) throws SerieIntrouvableException {
		SerieDto serieDto = serieService.findBySaison(saison);
		return ResponseEntity.ok(serieDto);
	}

	// details by episode
	@GetMapping("/series/episode/{episode}")
	public ResponseEntity<SerieDto> getByEpisode(@PathVariable int episode) throws SerieIntrouvableException {
		SerieDto serieDto = serieService.findByEpisode(episode);
		return ResponseEntity.ok(serieDto);
	}

	// update
	@PutMapping("/series")
	public ResponseEntity<SerieDto> update(@RequestBody SerieDto serieDto) throws SerieIntrouvableException {

		try {
			serieService.update(serieDto);
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SerieExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(serieDto);
	}

	// delete
	@DeleteMapping("/series/id/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws SerieIntrouvableException {
		serieService.deleteById(id);
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