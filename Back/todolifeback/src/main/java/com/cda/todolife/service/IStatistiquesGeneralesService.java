package com.cda.todolife.service;

import com.cda.todolife.dto.StatistiquesGeneralesDto;
import com.cda.todolife.exception.StatistiquesGeneralesExistantes;
import com.cda.todolife.exception.StatistiquesGeneralesIntrouvables;

public interface IStatistiquesGeneralesService {

	StatistiquesGeneralesDto FindByStatId (int id) throws StatistiquesGeneralesIntrouvables;

	void update(StatistiquesGeneralesDto statistiques) throws StatistiquesGeneralesIntrouvables;

	void deleteById(int id) throws StatistiquesGeneralesIntrouvables;

	void add(StatistiquesGeneralesDto statistiques) throws StatistiquesGeneralesExistantes;
}