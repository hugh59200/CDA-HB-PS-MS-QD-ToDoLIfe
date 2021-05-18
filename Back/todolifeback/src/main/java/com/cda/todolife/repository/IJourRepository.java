package com.cda.todolife.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.model.Jour;
import com.cda.todolife.model.Journal;

public interface IJourRepository extends CrudRepository<Jour, Integer> {

	List<Jour> findAll();

	Optional<JourDto> findByTitre(String titre);

	List<Jour> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur);

	Optional<Jour> findByDateJourAndJournal(String dateJour, Journal journalEnt);

	Optional<Jour> findByJournalUtilisateurIdUtilisateurAndDateJour(int idUtilisateur, String dateJour);

}
