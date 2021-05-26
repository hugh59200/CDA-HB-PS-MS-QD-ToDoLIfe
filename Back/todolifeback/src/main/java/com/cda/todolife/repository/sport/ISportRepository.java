package com.cda.todolife.repository.sport;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.sport.Sport;

public interface ISportRepository extends CrudRepository<Sport, Integer> {
	
	
	@Query(value = "SELECT label FROM sport", nativeQuery = true)
	List<Sport> label();
	
	@Query(value = "select * from sport where label like ?1% " , nativeQuery = true)
	List<Sport> startWith (String car);
	
	List<Sport> findAll();
	
	Sport findByLabel(String label);
}
