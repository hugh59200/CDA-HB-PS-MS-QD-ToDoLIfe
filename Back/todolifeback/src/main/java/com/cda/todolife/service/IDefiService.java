package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.DefiDto;
import com.cda.todolife.exception.DefiExistant;
import com.cda.todolife.exception.DefiIntrouvable;

public interface IDefiService {

	List<DefiDto> FindDefiByUserId(int id) throws DefiIntrouvable;
	
	List<DefiDto> FindDefiBySportId(int id) throws DefiIntrouvable;
	
	List<DefiDto> FindCompletedDefi () throws DefiIntrouvable;

	void update(DefiDto defi) throws DefiIntrouvable;

	void deleteById(int id) throws DefiIntrouvable;

	void add(DefiDto defi) throws DefiExistant;
}
