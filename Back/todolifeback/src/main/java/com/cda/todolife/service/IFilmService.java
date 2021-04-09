package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.FilmDto;
import com.cda.todolife.exception.FilmIntrouvableException;
import com.cda.todolife.exception.FilmeExistantException;

public interface IFilmService {

	List<FilmDto> findAll();
	
	FilmDto findById(int id) throws FilmIntrouvableException;

	void update(FilmDto film) throws FilmIntrouvableException, FilmeExistantException;

	void deleteById(int id) throws FilmIntrouvableException;

	void add(FilmDto film) throws FilmeExistantException;

	FilmDto findByName(String nom) throws FilmIntrouvableException;

}
