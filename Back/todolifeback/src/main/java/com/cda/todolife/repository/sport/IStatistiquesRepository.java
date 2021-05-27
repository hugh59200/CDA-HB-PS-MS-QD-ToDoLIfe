package com.cda.todolife.repository.sport;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.sport.Statistiques;

public interface IStatistiquesRepository extends CrudRepository<Statistiques, Integer> {
//	List<Statistiques> findAll();
	
	@Query(value = "select * from statistiques where id_utilisateur = ?1 ", nativeQuery = true)
	Statistiques findByUserId (int id);
}
