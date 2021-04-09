package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.SerieDto;
import com.cda.todolife.exception.serie.SerieExistanteException;
import com.cda.todolife.exception.serie.SerieIntrouvableException;

public interface ISerieService {

	List<SerieDto> findAll();

	SerieDto findById(int id) throws SerieIntrouvableException;

	void update(SerieDto serie) throws SerieIntrouvableException, SerieExistanteException;

	void deleteById(int id) throws SerieIntrouvableException;

	void add(SerieDto serie) throws SerieExistanteException;

	SerieDto findByName(String nom) throws SerieIntrouvableException;

	SerieDto findBySaison(int saison) throws SerieIntrouvableException;

	SerieDto findByEpisode(int episode) throws SerieIntrouvableException;

}
