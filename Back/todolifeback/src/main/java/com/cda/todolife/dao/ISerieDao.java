package com.cda.todolife.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Serie;

public interface ISerieDao extends CrudRepository<Serie, Integer> {

	List<Serie> findAll();
	
	Serie findByName(String name);
	
	Serie findBySaison(int saison);
	
	Serie findByEpisode(int episode);
	
}
