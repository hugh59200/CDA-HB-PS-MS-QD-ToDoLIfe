package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.routine.MatinDto;
import com.cda.todolife.dto.routine.SoirDto;

public interface IRoutineService {

	public List<MatinDto> findMatinsByIdUtilisateur(int id);

	public List<SoirDto> findSoirsByIdUtilisateur(int id);

}
