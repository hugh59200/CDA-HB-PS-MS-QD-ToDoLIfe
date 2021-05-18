package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.SportDto;
import com.cda.todolife.exception.SportExistant;
import com.cda.todolife.exception.SportIntrouvable;

public interface ISportService {
	
	List<SportDto> findAll();

	SportDto FindById(int id) throws SportIntrouvable, SportExistant;
	
//	SportDto FindByLabel(String label) throws SportIntrouvable, SportExistant;

	void update(SportDto sport) throws SportIntrouvable, SportExistant;

	void deleteById(int id) throws SportIntrouvable;

	void add(SportDto sport) throws SportExistant;

}
