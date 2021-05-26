package com.cda.todolife.repository.sport;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.sport.Trace;

public interface ITraceRepository extends CrudRepository<Trace, Integer> {
//	List<Trace> findAll();

	Trace findByLabel(String label);
}
