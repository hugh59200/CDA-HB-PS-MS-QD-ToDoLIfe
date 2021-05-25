package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.watchlist.SerieDto;
import com.cda.todolife.exception.SerieExistanteException;
import com.cda.todolife.exception.SerieIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;

public interface ISerieService {

	List<SerieDto> findAll();

	SerieDto findById(int id) throws SerieIntrouvableException;

	void deleteById(int id) throws SerieIntrouvableException;

	void add(SerieDto serie, int id) throws SerieExistanteException, WatchListIntrouvableException;

	SerieDto findByName(String nom) throws SerieIntrouvableException;

	SerieDto findBySaison(int saison) throws SerieIntrouvableException;

	SerieDto findByEpisode(int episode) throws SerieIntrouvableException;

	List<SerieDto> findAllByIdUtilisateur(int id);

	void update(SerieDto serie, int idSerie) throws SerieIntrouvableException, SerieExistanteException;

}
