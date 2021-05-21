package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.SportDto;
import com.cda.todolife.exception.SportExistant;
import com.cda.todolife.exception.SportIntrouvable;

public interface ISportService {
	
	List<SportDto> findAll();
	
	SportDto FindByLabel(String label) throws SportIntrouvable;

	void update(SportDto sport) throws SportIntrouvable;

	void deleteById(int id) throws SportIntrouvable;

	void add(SportDto sport) throws SportExistant;
}