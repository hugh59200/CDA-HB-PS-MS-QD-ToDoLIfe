package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Badge;

public interface IBadgeRepository extends CrudRepository<Badge, Integer> {
//	List<Badge> findAll();

//	@Query(value = "select * from badge where id_sport = ?1 ", nativeQuery = true)
//	List<Badge> FindBadgeBySportId(int id);
	
	@Query(value = "select * from badge where id_statistiques = ?1 ", nativeQuery = true)
	List<Badge> FindBadgeByStatId(int id);
	
	@Query(value = "select * from badge where id_statistiques = ?1 and id_sport = ?2 ", nativeQuery = true)
	List<Badge> FindBadgeBySportId(int idStat, int idSport);
	
	@Query(value = "select * from badge where id_statistiques = ?1 and label = ?2 ", nativeQuery = true)
	Badge FindBadgeByLabel(int id, String label);
}
