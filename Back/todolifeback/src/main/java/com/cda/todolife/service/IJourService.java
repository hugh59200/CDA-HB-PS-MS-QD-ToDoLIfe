package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.exception.JourExistantException;
import com.cda.todolife.exception.JourIntrouvableException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;

public interface IJourService {

	List<JourDto> findAll();

	JourDto findById(int id) throws JourIntrouvableException;

	void update(JourDto list) throws JourIntrouvableException, JourExistantException;

	void deleteById(int id) throws JourIntrouvableException;

	void add(int idUser, JourDto list) throws JourExistantException, JournalIntrouvableException, ResourceNotFoundException;

	JourDto findByTitre(String titre) throws JourIntrouvableException;

	List<JourDto> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur);
	
}
