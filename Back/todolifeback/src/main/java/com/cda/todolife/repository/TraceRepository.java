package com.cda.todolife.repository;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Trace;

public interface TraceRepository extends CrudRepository<Trace, Integer> {
//	List<Trace> findAll();
}
