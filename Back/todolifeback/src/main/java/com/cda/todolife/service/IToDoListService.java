package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.ToDoListDto;
import com.cda.todolife.exception.ToDoListExistanteException;
import com.cda.todolife.exception.ToDoListIntrouvableException;

public interface IToDoListService {

	List<ToDoListDto> findAll();

	ToDoListDto findById(int id) throws ToDoListIntrouvableException;

	void update(ToDoListDto list) throws ToDoListIntrouvableException, ToDoListExistanteException;

	void deleteById(int id) throws ToDoListIntrouvableException;

	void add(ToDoListDto list) throws ToDoListExistanteException;

	ToDoListDto findByLabel(String label) throws ToDoListIntrouvableException;
	
//	ToDoListDto findByselected() throws ToDoListIntrouvableException, ToDoListDejaSelectionerException;

}
