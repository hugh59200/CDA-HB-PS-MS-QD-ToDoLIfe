package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.watchlist.LivreDto;
import com.cda.todolife.exception.LivreExistantException;
import com.cda.todolife.exception.LivreIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;

public interface ILivreService {

	List<LivreDto> findAll();

	LivreDto findById(int id) throws LivreIntrouvableException;

	void update(LivreDto livre, int idLivre) throws LivreIntrouvableException, LivreExistantException;

	void deleteById(int id) throws LivreIntrouvableException;

	void add(LivreDto livre, int id) throws LivreExistantException, WatchListIntrouvableException;

	LivreDto findByPageActuel(int page) throws LivreIntrouvableException;

	LivreDto findByTitle(String livre) throws LivreIntrouvableException;

	List<LivreDto> findAllByIdUtilisateur(int id);

}
