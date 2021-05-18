package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Badge;

public interface BadgeRepository extends CrudRepository<Badge, Integer> {
//	List<Badge> findAll();

	@Query(value = "select * from badge where id_sport = ?1 ", nativeQuery = true)
	List<Badge> FindBadgeBySportId(int id);
}
