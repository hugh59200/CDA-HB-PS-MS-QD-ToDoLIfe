package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.TacheDto;
import com.cda.todolife.exception.TacheExistanteException;
import com.cda.todolife.exception.TacheIntrouvableException;

public interface ITacheService {

	List<TacheDto> findAll();
	
//	TacheDto findById(int id) throws TacheIntrouvableException;

	void update(TacheDto tache) throws TacheIntrouvableException, TacheExistanteException;

	void deleteById(int id) throws TacheIntrouvableException;

	void add(TacheDto tache) throws TacheExistanteException;

//	TacheDto findByLabel(String label) throws TacheIntrouvableException;
	
	List<TacheDto> findTaskByIdList(int id) throws TacheIntrouvableException;
}
