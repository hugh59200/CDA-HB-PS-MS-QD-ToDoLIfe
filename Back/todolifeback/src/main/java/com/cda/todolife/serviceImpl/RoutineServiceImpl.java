package com.cda.todolife.serviceImpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.routine.MatinDto;
import com.cda.todolife.dto.routine.SoirDto;
import com.cda.todolife.repository.IRoutineMatinRepository;
import com.cda.todolife.repository.IRoutineSoirRepository;
import com.cda.todolife.service.IRoutineService;

@Service
public class RoutineServiceImpl implements IRoutineService {

	@Autowired
	private IRoutineMatinRepository routineMatinService;

	@Autowired
	private IRoutineSoirRepository routineSoirService;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<MatinDto> findMatinsByIdUtilisateur(int id) {

		return this.routineMatinService.findByUtilisateurIdUtilisateur(id);
	}

	@Override
	public List<SoirDto> findSoirsByIdUtilisateur(int id) {

		return this.routineSoirService.findByUtilisateurIdUtilisateur(id);
	}

}
