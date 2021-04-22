package com.cda.todolife.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Jour;

public interface IJourRepository extends CrudRepository<Jour, Integer> {

	List<Jour> findAll();

	Jour findByTitre(String titre);

//	List<Optional<Jour>> findAllByJournalIdJournal(int idJournal);

}
