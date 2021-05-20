package com.cda.todolife.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.StatistiquesGenerales;

public interface IStatistiquesGeneralesRepository extends CrudRepository<StatistiquesGenerales, Integer> {
//	List<StatistiquesGenerales> findAll();
	
	@Query(value = "select * from statistiques_generales where id_statistique = ?1 ", nativeQuery = true)
	StatistiquesGenerales FindStatistiquesByStatId(int id);	
}
