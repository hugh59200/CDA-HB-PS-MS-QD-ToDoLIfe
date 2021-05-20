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

import com.cda.todolife.dto.ActiviteDto;
import com.cda.todolife.exception.ActiviteExistante;
import com.cda.todolife.exception.ActiviteIntrouvable;
import com.cda.todolife.service.IActiviteService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class ActiviteController {

	@Autowired
	IActiviteService activiteService;

	// create
	@PostMapping("/activites")
	public ResponseEntity<ActiviteDto> create(@RequestBody ActiviteDto activite) throws ActiviteExistante {
		try {
			this.activiteService.add(activite);
		} catch (ActiviteExistante e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(activite);
	}

	// delete
	@DeleteMapping("/activites/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws ActiviteIntrouvable {
		try {
			activiteService.deleteById(id);
		} catch (ActiviteIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/activites")
	public ResponseEntity<ActiviteDto> update(@RequestBody ActiviteDto activite) throws ActiviteIntrouvable {
		try {
			activiteService.update(activite);
		} catch (ActiviteIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(activite);
	}

//	// findById
//	@GetMapping("activites/id/{id}")
//	public ResponseEntity<ActiviteDto> findById(@PathVariable int id) throws ActiviteIntrouvable {
//		ActiviteDto activite = null;
//
//		try {
//			activite = activiteService.FindById(id);
//		} catch (ActiviteIntrouvable e) {
//			e.printStackTrace();
//		}
//		return ResponseEntity.ok(activite);
//	}

	// findBylabel
	@GetMapping("activites/utilisateur/{id}/label/{label}")
	public ResponseEntity<ActiviteDto> findByLabel(@PathVariable int id, @PathVariable String label) throws ActiviteIntrouvable {
		ActiviteDto activite = null;

		try {
			activite = activiteService.findByLabel(id, label);
		} catch (ActiviteIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(activite);
	}

	// findByUserId
	@GetMapping("/activites/utilisateur/{id}")
	public ResponseEntity<List<ActiviteDto>> FindByUserId(@PathVariable int id) throws ActiviteIntrouvable {
		List<ActiviteDto> activite = null;

		try {
			activite = this.activiteService.FindActiviteByUserId(id);
		} catch (ActiviteIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(activite);
	}

	// findByUserId
	@GetMapping("/activites/utilisateur/{idUser}/sport/{idSport}")
	public ResponseEntity<List<ActiviteDto>> findBysportId(@PathVariable int idUser, @PathVariable int idSport) throws ActiviteIntrouvable {
		List<ActiviteDto> activite = null;

		try {
			activite = this.activiteService.FindActiviteBySportId(idUser, idSport);
		} catch (ActiviteIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(activite);
	}

}
