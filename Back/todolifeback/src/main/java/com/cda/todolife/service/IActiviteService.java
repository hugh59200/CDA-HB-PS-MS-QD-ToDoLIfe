	package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.ActiviteDto;
import com.cda.todolife.exception.ActiviteExistante;
import com.cda.todolife.exception.ActiviteIntrouvable;

public interface IActiviteService {

	List<ActiviteDto> FindActiviteByUserId(int id) throws ActiviteIntrouvable;
	
	List<ActiviteDto> FindActiviteBySportId(int id) throws ActiviteIntrouvable;
	
	void update(ActiviteDto activite) throws ActiviteIntrouvable;

	void deleteById(int id) throws ActiviteIntrouvable;

	void add(ActiviteDto activite) throws ActiviteExistante;
}
