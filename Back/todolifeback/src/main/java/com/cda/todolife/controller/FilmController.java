package com.cda.todolife.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.watchlist.FilmDto;
import com.cda.todolife.exception.FilmExistantException;
import com.cda.todolife.exception.FilmIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.service.IFilmService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class FilmController {

	@Autowired
	private IFilmService filmService;

	// listing
	@GetMapping("/films")
	public List<FilmDto> getAll() {
		return this.filmService.findAll();
	}

	// create
	@PostMapping("/films/utilisateurs/{id}")
	public ResponseEntity<FilmDto> create(@RequestBody FilmDto filmDto, @PathVariable int id)
			throws FilmIntrouvableException {
		try {
			this.filmService.add(filmDto, id);

		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FilmExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(filmDto);
	}

	// details by Id
	@GetMapping("/films/utilisateurs/{id}")
	public ResponseEntity<List<FilmDto>> getAllByIdUtilisateur(@PathVariable int id) throws FilmIntrouvableException {
		List<FilmDto> filmDto = filmService.findAllByIdUtilisateur(id);
		return ResponseEntity.ok(filmDto);
	}

	// details by Name
	// @GetMapping("/films/name/{name}")
	// public ResponseEntity<FilmDto> getByName(@PathVariable String name) throws
	// FilmIntrouvableException {
	// FilmDto filmDto = filmService.findByName(name);
	// return ResponseEntity.ok(filmDto);
	// }

	// update
	@PutMapping("/films/{idFilm}")
	public ResponseEntity<FilmDto> update(@RequestBody FilmDto filmDto, @PathVariable("idFilm") int idFilm)
			throws FilmIntrouvableException {

		try {
			filmService.update(filmDto, idFilm);
		} catch (FilmIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FilmExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(filmDto);
	}

	// delete
	@DeleteMapping("/films/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws FilmIntrouvableException {
		filmService.deleteById(id);
		System.out.println("ok");
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	@ExceptionHandler(ConstraintViolationException.class)
//	public Map<String, String> handleValidationExceptions(ConstraintViolationException ex) {
//		Map<String, String> errors = new HashMap<>();
//		ex.getConstraintViolations().forEach(constraintViolation -> {
//			String fieldName = constraintViolation.getPropertyPath().toString();
//			fieldName = fieldName.substring(fieldName.lastIndexOf('.') + 1);
//			String errorMessage = constraintViolation.getMessage();
//			errors.put(fieldName, errorMessage);
//		});
//		return errors;
//	}
}
