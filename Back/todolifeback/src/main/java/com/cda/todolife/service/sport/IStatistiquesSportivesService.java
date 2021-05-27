package com.cda.todolife.service.sport;

import java.util.List;

import com.cda.todolife.dto.sport.StatistiquesSportivesDto;
import com.cda.todolife.exception.sport.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.sport.StatistiquesSportivesIntrouvables;

public interface IStatistiquesSportivesService {

	List<StatistiquesSportivesDto> findByStatId(int id) throws StatistiquesSportivesIntrouvables;
	
	StatistiquesSportivesDto findById (int id) throws StatistiquesSportivesIntrouvables;;

	void update(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesIntrouvables;

	void deleteById(int id) throws StatistiquesSportivesIntrouvables;

	void add(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesExistantes;
}
