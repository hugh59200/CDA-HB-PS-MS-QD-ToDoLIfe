package com.cda.todolife.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Journal;

public interface IJournalRepository extends CrudRepository<Journal, Integer> {

	List<Journal> findAll();

	Boolean findByUtilisateurIdUtilisateur1(int idUser);

	Optional<Journal> findByUtilisateurIdUtilisateur(int idUser);

}
