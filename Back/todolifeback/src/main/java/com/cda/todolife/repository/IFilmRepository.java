package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Film;

public interface IFilmRepository extends CrudRepository<Film, Integer> {

	List<Film> findAll();

	Film findByName(String name);

}
