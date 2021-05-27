package com.cda.todolife.service.sport;

import java.util.List;

import com.cda.todolife.dto.sport.DefiDto;
import com.cda.todolife.exception.sport.DefiExistant;
import com.cda.todolife.exception.sport.DefiIntrouvable;

public interface IDefiService {

	List<DefiDto> FindDefiByUserId(int id) throws DefiIntrouvable;
	
	List<DefiDto> FindDefiBySportId(int idSport, int idUser) throws DefiIntrouvable;
	
	List<DefiDto> FindCompletedDefi (int id) throws DefiIntrouvable;
	
	List<DefiDto> FindUncomplete (int id) throws DefiIntrouvable;
	
	DefiDto FindById (int id) throws DefiIntrouvable;
	
	DefiDto FindByLabel (int id, String label) throws DefiIntrouvable;

	void update(DefiDto defi) throws DefiIntrouvable;

	void deleteById(int id) throws DefiIntrouvable;

	void add(DefiDto defi) throws DefiExistant;
}
