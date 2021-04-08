package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.watchlist.WatchListExistanteException;
import com.cda.todolife.exception.watchlist.WatchListIntrouvableException;

public interface IWatchListService {

	List<WatchListDto> findAll();

	WatchListDto findById(int id) throws WatchListIntrouvableException;

	void update(WatchListDto watchList) throws WatchListIntrouvableException, WatchListExistanteException;

	void deleteById(int id) throws WatchListIntrouvableException;

	void add(WatchListDto livre) throws WatchListExistanteException;

	WatchListDto findByLabel(String label) throws WatchListIntrouvableException;

}
