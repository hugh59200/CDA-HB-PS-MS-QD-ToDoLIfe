package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Jour;

public interface IJourRepository extends CrudRepository<Jour, Integer> {

	List<Jour> findAll();

	Jour findByTitre(String titre);

	List<Jour> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur);

//	List<Jour> findAllByJournalUtilisateurIdUtilisateurAndDateJour(int idUtilisateur, String dateJour);

//	List<Jour> findAllByJournalUtilisateurIdUtilisateurAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
//			int idUtilisateur, String startDate, String endDate);

//	@Query("select * from Jour j where id_journal=(select id_journal from journal where id_utilisateur=?1) and year(j.date_jour) = ?2 and month(j.date_jour) = ?3")
//    List<Jour> findAllByJournalUtilisateurIdUtilisateurAnd(int idUtilisateur, Integer year, Integer month);
}
