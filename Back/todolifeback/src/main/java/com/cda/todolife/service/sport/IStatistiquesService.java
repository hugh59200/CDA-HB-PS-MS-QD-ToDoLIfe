package com.cda.todolife.service.sport;

import com.cda.todolife.dto.sport.StatistiquesDto;
import com.cda.todolife.exception.sport.StatistiquesExistantes;
import com.cda.todolife.exception.sport.StatistiquesIntrouvables;

public interface IStatistiquesService {

	StatistiquesDto findByUserId (int id) throws StatistiquesIntrouvables;
	
	StatistiquesDto FindById(int id) throws StatistiquesIntrouvables;

	void update(StatistiquesDto statistiques) throws StatistiquesIntrouvables;

	void deleteById(int id) throws StatistiquesIntrouvables;

	void add(StatistiquesDto statistiques) throws StatistiquesExistantes;
}
