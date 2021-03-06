package com.cda.todolife.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Jour;
import com.cda.todolife.model.Journal;

public interface IJourRepository extends CrudRepository<Jour, Integer> {

	List<Jour> findAll();

	Optional<Jour> findByTitre(String titre);

	List<Jour> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur);

	Optional<Jour> findByDateJourAndJournal(Date date, Journal journalEnt);

	Optional<Jour> findByJournalUtilisateurIdUtilisateurAndDateJour(int idUtilisateur, java.util.Date dateJour);

	@Query(value = "from Jour "
			+ "where journal.idJournal=(select idJournal from Journal where utilisateur.idUtilisateur=:idUtilisateur)"
			+ " and extract(month from dateJour)=:mois "
			+ "and extract(year from dateJour)=:annee")
	List<Jour> findAllByJournalUtilisateurIdUtilisateurAndDate(int idUtilisateur, int mois, int annee);

	@Query(value = "from Jour "
			+ "where journal.idJournal=(select idJournal from Journal where utilisateur.idUtilisateur=:idUtilisateur)"
			+ " and date_jour BETWEEN :startDate and :now ")
	List<Jour> listerParIdUserEtnbJours(int idUtilisateur, java.util.Date  startDate, java.util.Date now);

}
