package com.cda.todolife.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Livre;

public interface ILivreDao extends CrudRepository<Livre, Integer> {

	List<Livre> findAll();

	Livre findByTitle(String title);
	
	Livre findByPageActuel(int page);
}
