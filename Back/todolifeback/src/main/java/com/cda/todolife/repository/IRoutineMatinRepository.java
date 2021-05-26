package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.routine.Matin;

public interface IRoutineMatinRepository extends CrudRepository<Matin, Integer> {

	List<Matin> findAllByutilisateurIdUtilisateur(int idUtilisateur);

}
