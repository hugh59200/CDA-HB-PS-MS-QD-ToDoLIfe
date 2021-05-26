package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.dto.routine.SoirDto;
import com.cda.todolife.model.routine.Soir;

public interface IRoutineSoirRepository extends CrudRepository<Soir, Integer> {

	List<SoirDto> findByUtilisateurIdUtilisateur(int id);

}
