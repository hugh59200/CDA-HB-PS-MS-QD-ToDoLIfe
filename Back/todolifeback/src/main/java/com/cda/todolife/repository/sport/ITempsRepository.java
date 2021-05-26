package com.cda.todolife.repository.sport;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.sport.Temps;

public interface ITempsRepository extends CrudRepository<Temps, Integer> {
	
	@Query(value = "select * from temps where heures = ?1 and minutes = ?2 and secondes = ?3 ", nativeQuery = true)
	Temps findTemps (int h, int m, int s);
}
