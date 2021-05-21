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

	Optional<Jour> findByJournalUtilisateurIdUtilisateurAndDateJour(int idUtilisateur, String dateJour);

	@Query(value = "from Jour j where id_journal=(select id_journal from Journal where id_utilisateur=:idUtilisateur and j.dateJour =(select dateJour where extract(month from j.dateJour)=:mois) and extract(year from j.dateJour)=:annee)")
	List<Jour> findAllByJournalUtilisateurIdUtilisateurAndDate(int idUtilisateur, int mois, int annee);

//	@Query(value = "from Jour j where id_journal=(select id_journal from Journal where id_utilisateur=:idUtilisateur and j.date_jour =(select date_jour where extract(month from j.date_jour)=:mois) and extract(year from j.date_jour)=:annee)")
//	List<Jour> findAllByJournalUtilisateurIdUtilisateurAndDate(int idUtilisateur, int mois, int annee);

}
