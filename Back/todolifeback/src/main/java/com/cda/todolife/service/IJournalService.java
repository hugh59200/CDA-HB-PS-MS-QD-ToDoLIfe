package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;

public interface IJournalService {

	List<JournalDto> findAll();

	JournalDto findById(int id) throws JournalIntrouvableException;

	void update(JournalDto journalDto) throws JournalIntrouvableException, JournalExistantException;

	void deleteById(int id) throws JournalIntrouvableException;

	void add(String username) throws JournalExistantException, ResourceNotFoundException;

	Boolean findIfJournalExist(String username);

	JournalDto findByUtilisateurUsername(String username) throws JournalIntrouvableException;


}
