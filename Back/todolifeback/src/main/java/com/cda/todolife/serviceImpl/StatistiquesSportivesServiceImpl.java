package com.cda.todolife.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.StatistiquesSportivesDto;
import com.cda.todolife.exception.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.StatistiquesSportivesIntrouvables;
import com.cda.todolife.repository.IStatistiquesSportivesRepository;
import com.cda.todolife.service.IStatistiquesSportivesService;

@Service
public class StatistiquesSportivesServiceImpl implements IStatistiquesSportivesService {

	@Autowired
	private IStatistiquesSportivesRepository statistiquesSportivesDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public StatistiquesSportivesDto FindById(int id)
			throws StatistiquesSportivesIntrouvables, StatistiquesSportivesExistantes {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(StatistiquesSportivesDto statistiques)
			throws StatistiquesSportivesIntrouvables, StatistiquesSportivesExistantes {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) throws StatistiquesSportivesIntrouvables {
		// TODO Auto-generated method stub

	}

	@Override
	public void add(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesExistantes {
		// TODO Auto-generated method stub

	}

}
