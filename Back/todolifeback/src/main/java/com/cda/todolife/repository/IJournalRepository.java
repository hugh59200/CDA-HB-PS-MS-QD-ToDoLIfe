package com.cda.todolife.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Journal;

public interface IJournalRepository extends CrudRepository<Journal, Integer> {

	List<Journal> findAll();

	Optional<Journal> findByUtilisateurIdUtilisateur(int idUser);
}
