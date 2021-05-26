package com.cda.todolife.controller.sport;

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

import com.cda.todolife.dto.sport.DefiDto;
import com.cda.todolife.exception.sport.DefiExistant;
import com.cda.todolife.exception.sport.DefiIntrouvable;
import com.cda.todolife.service.sport.IDefiService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class DefiController {

	@Autowired
	IDefiService defiService;

	// create
	@PostMapping("/defis")
	public ResponseEntity<DefiDto> create(@RequestBody DefiDto defi) throws DefiExistant {
		try {
			this.defiService.add(defi);
		} catch (DefiExistant e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

	// delete
	@DeleteMapping("/defis/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws DefiIntrouvable {
		try {
			defiService.deleteById(id);
		} catch (DefiIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/defis")
	public ResponseEntity<DefiDto> update(@RequestBody DefiDto defi) throws DefiIntrouvable {
		System.out.println("defi =>"+defi);
		try {
			defiService.update(defi);
		} catch (DefiIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

//	// findById
//	@GetMapping("defis/id/{id}")
//	public ResponseEntity<DefiDto> findById(@PathVariable int id) throws DefiIntrouvable {
//		DefiDto defi = null;
//
//		try {
//			defi = defiService.FindById(id);
//		} catch (DefiIntrouvable e) {
//			e.printStackTrace();
//		}
//		return ResponseEntity.ok(defi);
//	}

	// findByLabel
	@GetMapping("defis/utilisateur/{id}/label/{label}")
	public ResponseEntity<DefiDto> findByLabel(@PathVariable int id ,@PathVariable String label) throws DefiIntrouvable {
		DefiDto defi = null;

		try {
			defi = defiService.FindByLabel(id, label);
		} catch (DefiIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

	// findByUserId
	@GetMapping("/defis/utilisateur/{id}")
	public ResponseEntity<List<DefiDto>> FindByUserId(@PathVariable int id) throws DefiIntrouvable {
		List<DefiDto> defi = null;

		try {
			defi = this.defiService.FindDefiByUserId(id);
		} catch (DefiIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

	// findByUSportId
	@GetMapping("/defis/defis/utilisateur/{idUser}/sport/{idSport}")
	public ResponseEntity<List<DefiDto>> FindBySportId(@PathVariable int idUser, int idSport) throws DefiIntrouvable {
		List<DefiDto> defi = null;

		try {
			defi = this.defiService.FindDefiBySportId(idSport, idUser);
		} catch (DefiIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

	// findComplete
	@GetMapping("/defis/utilisateur/{id}/complete")
	public ResponseEntity<List<DefiDto>> FindComplete(int id) throws DefiIntrouvable {
		List<DefiDto> defi = null;

		try {
			defi = this.defiService.FindCompletedDefi(id);
		} catch (DefiIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

	// findComplete
	@GetMapping("/defis/utilisateur/{id}/uncomplete")
	public ResponseEntity<List<DefiDto>> FindUncomplete(int id) throws DefiIntrouvable {
		List<DefiDto> defi = null;

		try {
			defi = this.defiService.FindUncomplete(id);
		} catch (DefiIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(defi);
	}

}
