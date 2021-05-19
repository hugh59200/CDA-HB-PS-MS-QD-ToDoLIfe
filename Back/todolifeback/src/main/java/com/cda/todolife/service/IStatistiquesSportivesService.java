package com.cda.todolife.service;

import com.cda.todolife.dto.StatistiquesSportivesDto;
import com.cda.todolife.exception.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.StatistiquesSportivesIntrouvables;

public interface IStatistiquesSportivesService {

	StatistiquesSportivesDto FindById(int id) throws StatistiquesSportivesIntrouvables;

	void update(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesIntrouvables;

	void deleteById(int id) throws StatistiquesSportivesIntrouvables;

	void add(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesExistantes;
}
