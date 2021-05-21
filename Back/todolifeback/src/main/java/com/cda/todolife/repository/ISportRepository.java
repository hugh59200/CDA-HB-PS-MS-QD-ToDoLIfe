package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Sport;

public interface ISportRepository extends CrudRepository<Sport, Integer> {
	List<Sport> findAll();
	
	Sport findByLabel(String label);
}
