	package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.ActiviteDto;
import com.cda.todolife.exception.ActiviteExistante;
import com.cda.todolife.exception.ActiviteIntrouvable;

public interface IActiviteService {

	List<ActiviteDto> FindActiviteByUserId(int id) throws ActiviteIntrouvable, ActiviteExistante;
	
	List<ActiviteDto> FindActiviteBySportId(int id) throws ActiviteIntrouvable, ActiviteExistante;
	
	void update(ActiviteDto activite) throws ActiviteIntrouvable, ActiviteExistante;

	void deleteById(int id) throws ActiviteIntrouvable;

	void add(ActiviteDto activite) throws ActiviteExistante;

}
