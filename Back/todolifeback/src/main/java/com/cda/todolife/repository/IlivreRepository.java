package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.dto.LivreDto;
import com.cda.todolife.model.Livre;

public interface IlivreRepository extends CrudRepository<Livre, Integer> {

	List<Livre> findAll();

	Livre findByTitle(String title);

	Livre findByPageActuel(int page);

	Iterable<Livre> findAllBywatchListIdWatchList(int idWatchList);

	Object save(LivreDto livre);


}
