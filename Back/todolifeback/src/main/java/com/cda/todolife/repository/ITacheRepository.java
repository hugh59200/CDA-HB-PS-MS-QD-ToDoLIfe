package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Tache;

public interface ITacheRepository extends CrudRepository<Tache, Integer> {

	List<Tache> findAll();

	Tache findByLabel(String label);

	@Query(value = "select * from tache where id_todolist = ?1 ", nativeQuery = true)
	List<Tache> findTaskByIdList(int id);
}
