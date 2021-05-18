package com.cda.todolife.repository;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Sport;

public interface SportRepository extends CrudRepository<Sport, Integer> {
//	List<Sport> findAll();
}
