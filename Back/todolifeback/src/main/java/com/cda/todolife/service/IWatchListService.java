package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.watchlist.WatchListDto;
import com.cda.todolife.exception.WatchListExistanteException;
import com.cda.todolife.exception.WatchListIntrouvableException;

public interface IWatchListService {

	List<WatchListDto> findAll();

	WatchListDto findById(int id) throws WatchListIntrouvableException;

	void update(WatchListDto watchList) throws WatchListIntrouvableException, WatchListExistanteException;

	void deleteById(int id) throws WatchListIntrouvableException;

	void add(WatchListDto watchList, int id) throws WatchListExistanteException;

	WatchListDto findByLabel(String label) throws WatchListIntrouvableException;

	Boolean findByIdUtilisateur(int id) throws WatchListIntrouvableException;

}
