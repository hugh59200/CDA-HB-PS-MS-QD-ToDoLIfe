package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Jour;
import com.cda.todolife.model.Journal;

public interface IJourRepository extends CrudRepository<Jour, Integer> {

	List<Jour> findAll();

	Jour findByTitre(String titre);

	List<Jour> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur);

	List<Jour> findByDateJourAndJournal(String dateJour, Journal journalEnt);

}
