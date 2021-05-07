package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.FilmDto;
import com.cda.todolife.exception.FilmExistantException;
import com.cda.todolife.exception.FilmIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;

public interface IFilmService {

	List<FilmDto> findAll();
	
	FilmDto findById(int id) throws FilmIntrouvableException;

	void update(FilmDto film,int idFilm) throws FilmIntrouvableException, FilmExistantException;

	void deleteById(int id) throws FilmIntrouvableException;

	void add(FilmDto film, int id) throws FilmExistantException, WatchListIntrouvableException;

	FilmDto findByName(String nom) throws FilmIntrouvableException;

	List<FilmDto> findAllByIdUtilisateur(int id);

}
