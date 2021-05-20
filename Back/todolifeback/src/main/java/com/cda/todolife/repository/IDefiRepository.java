package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Defi;

public interface IDefiRepository extends CrudRepository<Defi, Integer> {
//	List<Defi> findAll();

	@Query(value = "select * from defi where id_utilisateur = ?1 ", nativeQuery = true)
	List<Defi> FindDefiByUserId(int id);

	@Query(value = "select * from defi where id_sport = ?1 and id_utilisateur = ?2 ", nativeQuery = true)
	List<Defi> FindDefiBySportId(int idSport, int idUser);

	@Query(value = "select * from defi where pourcentage = 100 and id_utilisateur = ?1 ", nativeQuery = true)
	List<Defi> FindCompletedDefi(int id);
	
	@Query(value = "select * from defi where id_utilisateur = ?1 and pourcentage between 1 and 99 ", nativeQuery = true)
	List<Defi> FindUncompletedDef(int id);
	
	@Query(value = "select * from defi where id_utilisateur = ?1 and label = ?2 ", nativeQuery = true)
	Defi findByLabel(int id, String label);
}
