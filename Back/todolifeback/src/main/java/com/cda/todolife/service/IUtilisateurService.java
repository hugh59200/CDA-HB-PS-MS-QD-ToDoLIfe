package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.exception.ResourceAlreadyExist;
import com.cda.todolife.exception.ResourceNotFoundException;

public interface IUtilisateurService {

	List<UtilisateurDtoList> list();

	void create(UtilisateurDto userDto) throws ResourceAlreadyExist;

	UtilisateurDto show(int id) throws ResourceNotFoundException;

	void update(UtilisateurDto userDto) throws ResourceAlreadyExist;

	void delete(int id) throws ResourceNotFoundException;

}
