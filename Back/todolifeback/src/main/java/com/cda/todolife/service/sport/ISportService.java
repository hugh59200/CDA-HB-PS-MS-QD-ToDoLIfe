package com.cda.todolife.service.sport;

import java.util.List;

import com.cda.todolife.dto.sport.SportDto;
import com.cda.todolife.exception.sport.SportExistant;
import com.cda.todolife.exception.sport.SportIntrouvable;

public interface ISportService {
	
	List<SportDto> findAll();
	
	List<SportDto> findAllByLabel();
	
	List<SportDto> startWith (String car);
	
	SportDto FindByLabel(String label) throws SportIntrouvable;

	void update(SportDto sport) throws SportIntrouvable;

	void deleteById(int id) throws SportIntrouvable;

	void add(SportDto sport) throws SportExistant;
}
