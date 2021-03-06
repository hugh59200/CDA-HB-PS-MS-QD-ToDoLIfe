package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.ToDoList;

public interface IToDoListRepository extends CrudRepository<ToDoList, Integer> {

	List<ToDoList> findAll();

//	ToDoList findByLabel(String label);
	
	@Query(value = "select * from todolist where id_utilisateur = ?1 ", nativeQuery = true)
	List<ToDoList> findListByUserId(int id);
}
