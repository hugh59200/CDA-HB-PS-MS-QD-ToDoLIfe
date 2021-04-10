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

import com.cda.todolife.dto.LivreDto;
import com.cda.todolife.exception.livre.LivreExistantException;
import com.cda.todolife.exception.livre.LivreIntrouvableException;
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
	@PostMapping("/livres")
	public ResponseEntity<LivreDto> create(@RequestBody LivreDto livreDto) throws LivreIntrouvableException {
		try {
			this.livreService.add(livreDto);
		} catch (LivreExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(livreDto);
	}

	// details by Id
	@GetMapping("/livres/id/{id}")
	public ResponseEntity<LivreDto> getById(@PathVariable int id) throws LivreIntrouvableException {
		LivreDto livreDto = livreService.findById(id);
		return ResponseEntity.ok(livreDto);
	}

	// details by title
	@GetMapping("/livres/title/{title}")
	public ResponseEntity<LivreDto> getByTitle(@PathVariable String title) throws LivreIntrouvableException {
		LivreDto livreDto = livreService.findByTitle(title);
		return ResponseEntity.ok(livreDto);
	}
	
	// details by pageActuel
		@GetMapping("/livres/page/{page}")
		public ResponseEntity<LivreDto> getByPageActuel(@PathVariable int page) throws LivreIntrouvableException {
			LivreDto livreDto = livreService.findByPageActuel(page);
			return ResponseEntity.ok(livreDto);
		}

	// update
	@PutMapping("/livres")
	public ResponseEntity<LivreDto> update(@RequestBody LivreDto livreDto) throws LivreIntrouvableException {

		try {
			livreService.update(livreDto);
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
	@DeleteMapping("/livres/id/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws LivreIntrouvableException {
		livreService.deleteById(id);
		System.out.println("ok");
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}