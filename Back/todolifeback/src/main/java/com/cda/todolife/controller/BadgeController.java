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

import com.cda.todolife.dto.BadgeDto;
import com.cda.todolife.exception.BadgeExistant;
import com.cda.todolife.exception.BadgeIntrouvable;
import com.cda.todolife.service.IBadgeService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class BadgeController {

	@Autowired
	IBadgeService badgeService;

	// create
	@PostMapping("/badges")
	public ResponseEntity<BadgeDto> create(@RequestBody BadgeDto badge) throws BadgeExistant {
		
		System.out.println(badge);
		try {
			this.badgeService.add(badge);
		} catch (BadgeExistant e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		return ResponseEntity.ok(badge);
	}

	// delete
	@DeleteMapping("/badges/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws BadgeIntrouvable {
		try {
			badgeService.deleteById(id);
		} catch (BadgeIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/badges")
	public ResponseEntity<BadgeDto> update(@RequestBody BadgeDto badge) throws BadgeIntrouvable {
		try {
			badgeService.update(badge);
		} catch (BadgeIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(badge);
	}

	// findById
	@GetMapping("badges/id/{id}")
	public ResponseEntity<BadgeDto> findById(@PathVariable int id) throws BadgeIntrouvable {
		BadgeDto badge = null;

		try {
			badge = badgeService.findById(id);
		} catch (BadgeIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(badge);
	}

//	// ListdBySportId
//	@GetMapping("badges/sport/{id}")
//	public ResponseEntity<List<BadgeDto>> findBySportId(@PathVariable int id) throws BadgeIntrouvable {
//		List<BadgeDto> badge = null;
//
//		try {
//			badge = badgeService.FindBadgeBySportId(id);
//		} catch (BadgeIntrouvable e) {
//			e.printStackTrace();
//		}
//		return ResponseEntity.ok(badge);
//	}

	// findByStatId
	@GetMapping("badges/stat/{id}")
	public ResponseEntity<List<BadgeDto>> findByStatId(@PathVariable int id) throws BadgeIntrouvable {
		List<BadgeDto> badge = null;

		try {
			badge = badgeService.FindByStatId(id);
		} catch (BadgeIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(badge);
	}

	// findBadgeBySportId
	@GetMapping("badges/stat/{idStat}/sport/{idSport}")
	public ResponseEntity<List<BadgeDto>> FindBadgeByStatIdAndSportId(int idStat, int idSport) throws BadgeIntrouvable {
		List<BadgeDto> badge = null;

		try {
			badge = badgeService.FindBadgeBySportId(idStat, idSport);
		} catch (BadgeIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(badge);
	}

	// findBadgeByLabel
	@GetMapping("badges/stat/{id}/label/{label}")
	public ResponseEntity<BadgeDto> FindBadgeByStatIdAndByLabel(int id, String label) throws BadgeIntrouvable {
		BadgeDto badge = null;

		try {
			badge = badgeService.FindBadgeByLabel(id, label);
		} catch (BadgeIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(badge);
	}
}
