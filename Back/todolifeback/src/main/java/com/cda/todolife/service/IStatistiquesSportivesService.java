package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.StatistiquesSportivesDto;
import com.cda.todolife.exception.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.StatistiquesSportivesIntrouvables;

public interface IStatistiquesSportivesService {

	List<StatistiquesSportivesDto> findByStatId(int id) throws StatistiquesSportivesIntrouvables;

	void update(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesIntrouvables;

	void deleteById(int id) throws StatistiquesSportivesIntrouvables;

	void add(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesExistantes;
}
