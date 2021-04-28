package com.cda.todolife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cda.todolife.model.ToDoList;

public interface IToDoListRepository extends JpaRepository<ToDoList, Integer> {

	List<ToDoList> findAll();

	ToDoList findByLabel(String label);
	
	@Query(value = "select * from todolist where id_utilisateur = ?1 ", nativeQuery = true)
	List<ToDoList> findListByUserId(int id);
	
	
	
//	@Query(value = "insert into todolist (label, id_utilisateur) values (?1, ?2) ", nativeQuery = true)
//	ToDoList insert(String Label, int id);
	
	
//	ToDoList findByselected();
}
