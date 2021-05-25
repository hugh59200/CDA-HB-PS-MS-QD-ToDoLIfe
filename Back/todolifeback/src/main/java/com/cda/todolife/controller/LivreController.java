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

import com.cda.todolife.dto.watchlist.LivreDto;
import com.cda.todolife.exception.LivreExistantException;
import com.cda.todolife.exception.LivreIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.service.ILivreService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class LivreController {

	@Autowired
	private ILivreService livreService;

	// listing
	@GetMapping("/livres")
	public List<LivreDto> getAll() {
		return this.livreService.findAll();
	}

	// create
	@PostMapping("/livres/utilisateurs/{id}")
	public ResponseEntity<LivreDto> create(@RequestBody LivreDto livreDto, @PathVariable int id)
			throws LivreIntrouvableException {
		try {

			this.livreService.add(livreDto, id);
		} catch (WatchListIntrouvableException e) {

			e.printStackTrace();

		} catch (LivreExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(livreDto);
	}

	// details by Id
	@GetMapping("/livres/utilisateurs/{id}")
	public ResponseEntity<List<LivreDto>> getAllByIdUtilisateur(@PathVariable int id) throws LivreIntrouvableException {
		List<LivreDto> livreDto = livreService.findAllByIdUtilisateur(id);
		return ResponseEntity.ok(livreDto);
	}

//	// details by title
//	@GetMapping("/livres/title/{title}")
//	public ResponseEntity<LivreDto> getByTitle(@PathVariable String title) throws LivreIntrouvableException {
//		LivreDto livreDto = livreService.findByTitle(title);
//		return ResponseEntity.ok(livreDto);
//	}

	// update
	@PutMapping("/livres/{idLivre}")
	public ResponseEntity<LivreDto> update(@RequestBody LivreDto livreDto, @PathVariable("idLivre") int idLivre)
			throws LivreIntrouvableException {

		try {
			livreService.update(livreDto,idLivre);
		} catch (LivreIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (LivreExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(livreDto);
	}

	// delete
	@DeleteMapping("/livres/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws LivreIntrouvableException {
		livreService.deleteById(id);
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