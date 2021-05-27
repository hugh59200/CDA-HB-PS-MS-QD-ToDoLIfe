package com.cda.todolife.service.sport;

import com.cda.todolife.dto.sport.StatistiquesGeneralesDto;
import com.cda.todolife.exception.sport.StatistiquesGeneralesExistantes;
import com.cda.todolife.exception.sport.StatistiquesGeneralesIntrouvables;

public interface IStatistiquesGeneralesService {

	StatistiquesGeneralesDto FindByStatId (int id) throws StatistiquesGeneralesIntrouvables;

	void update(StatistiquesGeneralesDto statistiques) throws StatistiquesGeneralesIntrouvables;

	void deleteById(int id) throws StatistiquesGeneralesIntrouvables;

	void add(StatistiquesGeneralesDto statistiques) throws StatistiquesGeneralesExistantes;
}
