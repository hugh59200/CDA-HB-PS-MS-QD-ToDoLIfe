package com.cda.todolife.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Statistiques;

public interface StatistiquesRepository extends CrudRepository<Statistiques, Integer> {

//	List<Statistiques> findAll();
	
	@Query(value = "select * from statistiques where id_utilisateur = ?1 ", nativeQuery = true)
	Statistiques FindStatistiquesByUserId(int id);
}
