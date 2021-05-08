package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;

public interface IJournalService {

	List<JournalDto> findAll();

	JournalDto findById(int id) throws JournalIntrouvableException;

	void update(JournalDto list) throws JournalIntrouvableException, JournalExistantException;

	void deleteById(int id) throws JournalIntrouvableException;

	void add(JournalDto list) throws JournalExistantException;

	Boolean findIfJournalExist(int idUser);

}
