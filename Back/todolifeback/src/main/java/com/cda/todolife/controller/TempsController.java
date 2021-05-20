package com.cda.todolife.controller;

import java.util.HashMap;
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

import com.cda.todolife.dto.TempsDto;
import com.cda.todolife.exception.TempsIntrouvable;
import com.cda.todolife.exception.TraceIntrouvable;
import com.cda.todolife.service.ITempsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class TempsController {

	@Autowired
	ITempsService tempsServicce;

	// create
	@PostMapping("/temps")
	public ResponseEntity<TempsDto> create(@RequestBody TempsDto temps) {
		this.tempsServicce.add(temps);
		return ResponseEntity.ok(temps);
	}

	// delete
	@DeleteMapping("/temps/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws TempsIntrouvable {
		try {
			tempsServicce.deleteById(id);
		} catch (TempsIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/temps")
	public ResponseEntity<TempsDto> update(@RequestBody TempsDto temps) throws TempsIntrouvable {
		try {
			tempsServicce.update(temps);
		} catch (TempsIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(temps);
	}

	// findById
	@GetMapping("temps/{id}")
	public ResponseEntity<TempsDto> findById(@PathVariable int id) throws TraceIntrouvable {
		TempsDto temps = null;

		try {
			temps = tempsServicce.FindById(id);
		} catch (TempsIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(temps);
	}

}
