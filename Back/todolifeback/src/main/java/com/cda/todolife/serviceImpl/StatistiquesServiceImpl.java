package com.cda.todolife.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.StatistiquesDto;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.exception.StatistiquesExistantes;
import com.cda.todolife.exception.StatistiquesIntrouvables;
import com.cda.todolife.repository.IStatistiquesRepository;
import com.cda.todolife.service.IStatistiquesService;


@Service
public class StatistiquesServiceImpl implements IStatistiquesService {
	
	
	@Autowired
	private IStatistiquesRepository statistiquesDao;
	
	@Autowired
	private ModelMapper modelMapper;
	

	@Override
	public StatistiquesDto FindStatistiquesByUserId(int id) throws StatistiquesIntrouvables, ResourceNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(StatistiquesDto statistiques) throws StatistiquesIntrouvables, StatistiquesIntrouvables {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(int id) throws StatistiquesIntrouvables {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void add(StatistiquesDto statistiques) throws StatistiquesExistantes {
		// TODO Auto-generated method stub
		
	}

}
