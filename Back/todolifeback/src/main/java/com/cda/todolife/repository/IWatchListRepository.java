package com.cda.todolife.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.model.WatchList;

public interface IWatchListRepository extends CrudRepository<WatchList, Integer> {

	List<WatchList> findAll();

	WatchList findByLabel(String title);

	Optional<WatchList> findByUtilisateurIdUtilisateur(int id);

}
