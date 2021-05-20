package com.cda.todolife.repository;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Temps;

public interface ITempsRepository extends CrudRepository<Temps, Integer> {
}
