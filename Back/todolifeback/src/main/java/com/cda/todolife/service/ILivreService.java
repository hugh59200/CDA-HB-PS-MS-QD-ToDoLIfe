package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.LivreDto;
import com.cda.todolife.exception.LivreExistantException;
import com.cda.todolife.exception.LivreIntrouvableException;

public interface ILivreService {

	List<LivreDto> findAll();

	LivreDto findById(int id) throws LivreIntrouvableException;

	void update(LivreDto livre) throws LivreIntrouvableException, LivreExistantException;

	void deleteById(int id) throws LivreIntrouvableException;

	void add(LivreDto livre) throws LivreExistantException;

	LivreDto findByTitle(String livre) throws LivreIntrouvableException;

}
