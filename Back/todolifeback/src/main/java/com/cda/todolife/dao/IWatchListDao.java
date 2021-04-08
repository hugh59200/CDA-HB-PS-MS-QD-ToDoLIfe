package com.cda.todolife.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.model.WatchList;

public interface IWatchListDao extends CrudRepository<WatchList, Integer> {

	List<WatchList> findAll();

	WatchList findByLabel(String title);
}
