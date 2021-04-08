package com.cda.todolife.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Film;

public interface IFilmDao extends CrudRepository<Film, Integer> {

	List<Film> findAll();

	Film findByName(String name);

}
