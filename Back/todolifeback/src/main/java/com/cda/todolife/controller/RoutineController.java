package com.cda.todolife.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cda.todolife.dto.routine.MatinDto;
import com.cda.todolife.dto.routine.SoirDto;
import com.cda.todolife.service.IRoutineService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class RoutineController {

	@Autowired
	private IRoutineService routineService;

	@GetMapping("/matins/{id}")
	public ResponseEntity<List<MatinDto>> getMatins(@PathVariable int id) {

		try {
			List<MatinDto> matinDto = this.routineService.findMatinsByIdUtilisateur(id);
			return ResponseEntity.ok(matinDto);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

	@GetMapping("/soirs/{id}")
	public ResponseEntity<List<SoirDto>> getSoirs(@PathVariable int id) {

		try {
			List<SoirDto> soirDto = this.routineService.findSoirsByIdUtilisateur(id);
			return ResponseEntity.ok(soirDto);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

}
