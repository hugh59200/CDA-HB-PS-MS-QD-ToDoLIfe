package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.FilmDto;
import com.cda.todolife.exception.FilmExistantException;
import com.cda.todolife.exception.FilmIntrouvableException;

public interface IFilmService {

	List<FilmDto> findAll();
	
	FilmDto findById(int id) throws FilmIntrouvableException;

	void update(FilmDto film) throws FilmIntrouvableException, FilmExistantException;

	void deleteById(int id) throws FilmIntrouvableException;

	void add(FilmDto film) throws FilmExistantException;

	FilmDto findByName(String nom) throws FilmIntrouvableException;

}
