package com.cda.todolife.controller.sport;

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

import com.cda.todolife.dto.sport.TraceDto;
import com.cda.todolife.exception.sport.TraceExistante;
import com.cda.todolife.exception.sport.TraceIntrouvable;
import com.cda.todolife.service.sport.ITraceService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class TraceController {

	@Autowired
	ITraceService traceService;

	// create
	@PostMapping("/traces")
	public ResponseEntity<TraceDto> create(@RequestBody TraceDto trace) throws TraceExistante {
		try {
			this.traceService.add(trace);
		} catch (TraceExistante e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(trace);
	}

	// delete
	@DeleteMapping("/traces/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws TraceIntrouvable {
		try {
			traceService.deleteById(id);
		} catch (TraceIntrouvable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// update
	@PutMapping("/traces")
	public ResponseEntity<TraceDto> update(@RequestBody TraceDto trace) throws TraceIntrouvable {
		try {
			traceService.update(trace);
		} catch (TraceIntrouvable e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(trace);
	}
	
	// findById
		@GetMapping("traces/id/{id}")
		public ResponseEntity<TraceDto> findById(@PathVariable int id) throws TraceIntrouvable {
			TraceDto trace = null;

			try {
				trace = traceService.FindById(id);
			} catch (TraceIntrouvable e) {
				e.printStackTrace();
			}
			return ResponseEntity.ok(trace);
		}

		// findByLabel
		@GetMapping("traces/label/{label}")
		public ResponseEntity<TraceDto> findByLabel(@PathVariable String label) throws TraceIntrouvable {
			TraceDto defi = null;

			try {
				defi = traceService.FindByLabel(label);
			} catch (TraceIntrouvable e) {
				e.printStackTrace();
			}
			return ResponseEntity.ok(defi);
		}

}
