package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Activite;

public interface ActiviteRepository extends CrudRepository<Activite, Integer> {
//	List<Activite> findAll();

	@Query(value = "select * from activite where id_utilisateur = ?1 ", nativeQuery = true)
	List<Activite> FindActiviteByUserId(int id);
	
	@Query(value = "select * activite defi where id_sport = ?1 ", nativeQuery = true)
	List<Activite> FindActiviteBySportId(int id);
}
