package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.Tache;

public interface ITacheRepository extends CrudRepository<Tache, Integer> {

	List<Tache> findAll();

	Tache findByLabel(String label);
	
	String query = "select * from tache where id_todolist = ?1 ";
//	String query = "select * from tache where id_todolist = ?1 order by priorite ";

	@Query(value = query, nativeQuery = true)
	List<Tache> findTaskByIdList(int id);
}
