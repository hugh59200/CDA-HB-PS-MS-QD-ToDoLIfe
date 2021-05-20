package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.StatistiquesSportives;

public interface IStatistiquesSportivesRepository extends CrudRepository<StatistiquesSportives, Integer> {
//	List<StatistiquesSportivesDefi> findAll();
	
	@Query(value = "select * from statistiques_sportives where id_statistique = ?1 ", nativeQuery = true)
	List<StatistiquesSportives> FindStatistiquesByStatId(int id);	
}
