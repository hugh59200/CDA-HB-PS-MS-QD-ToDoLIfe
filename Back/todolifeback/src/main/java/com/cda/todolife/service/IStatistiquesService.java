package com.cda.todolife.service;

import com.cda.todolife.dto.StatistiquesDto;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.exception.StatistiquesExistantes;
import com.cda.todolife.exception.StatistiquesIntrouvables;

public interface IStatistiquesService {

	StatistiquesDto FindStatistiquesByUserId(int id) throws StatistiquesIntrouvables, ResourceNotFoundException;

	void update(StatistiquesDto statistiques) throws StatistiquesIntrouvables, StatistiquesIntrouvables;

	void deleteById(int id) throws StatistiquesIntrouvables;

	void add(StatistiquesDto statistiques) throws StatistiquesExistantes;

}
