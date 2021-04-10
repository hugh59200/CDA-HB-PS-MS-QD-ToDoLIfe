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

import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.watchlist.WatchListExistanteException;
import com.cda.todolife.exception.watchlist.WatchListIntrouvableException;
import com.cda.todolife.service.IWatchListService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class WatchListController {

	@Autowired
	private IWatchListService watchListService;

	// listing
	@GetMapping("/watchlists")
	public List<WatchListDto> getAll() {
		return this.watchListService.findAll();
	}

	// create
	@PostMapping("/watchlists")
	public ResponseEntity<WatchListDto> create(@RequestBody WatchListDto watchListDto)
			throws WatchListIntrouvableException {
		try {
			this.watchListService.add(watchListDto);
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(watchListDto);
	}

	// details by Id
	@GetMapping("/watchlists/id/{id}")
	public ResponseEntity<WatchListDto> getById(@PathVariable int id) throws WatchListIntrouvableException {
		WatchListDto watchListDto = watchListService.findById(id);
		System.out.println(watchListDto);
		return ResponseEntity.ok(watchListDto);
	}

	// details by label
	@GetMapping("/watchlists/label/{label}")
	public ResponseEntity<WatchListDto> getByLabel(@PathVariable String label) throws WatchListIntrouvableException {
		WatchListDto watchListDto = watchListService.findByLabel(label);
		return ResponseEntity.ok(watchListDto);
	}

	// update
	@PutMapping("/watchlists")
	public ResponseEntity<WatchListDto> update(@RequestBody WatchListDto watchListDto)
			throws WatchListIntrouvableException {
		try {
			watchListService.update(watchListDto);
		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(watchListDto);
	}

	// delete
	@DeleteMapping("/watchlists/id/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) throws WatchListIntrouvableException {
		watchListService.deleteById(id);
		System.out.println("ok");
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}