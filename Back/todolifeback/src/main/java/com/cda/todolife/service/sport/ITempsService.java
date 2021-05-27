package com.cda.todolife.service.sport;

import com.cda.todolife.dto.sport.TempsDto;
import com.cda.todolife.exception.sport.TempsIntrouvable;

public interface ITempsService {

	TempsDto FindById(int id) throws TempsIntrouvable;
	
	void update(TempsDto temps) throws TempsIntrouvable;

	void deleteById(int id) throws TempsIntrouvable;

	void add(TempsDto temps);
	
	TempsDto findTemps (int h, int m, int s) throws TempsIntrouvable;
}
