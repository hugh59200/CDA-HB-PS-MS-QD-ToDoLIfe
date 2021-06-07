package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.routine.MatinDto;
import com.cda.todolife.dto.routine.SoirDto;
import com.cda.todolife.exception.UtilisateurInconnuException;

public interface IRoutineService {

	public List<MatinDto> findMatinsByIdUtilisateur(int id) throws UtilisateurInconnuException;

	public List<SoirDto> findSoirsByIdUtilisateur(int id) throws UtilisateurInconnuException;

	void addMatin(MatinDto matinDto, int id) throws UtilisateurInconnuException;

	void addSoir(SoirDto soirDto, int id) throws UtilisateurInconnuException;

	public void modifMatin(MatinDto matinDto, int id) throws UtilisateurInconnuException;

	public void modifSoir(SoirDto soirDto, int id) throws UtilisateurInconnuException;

}
