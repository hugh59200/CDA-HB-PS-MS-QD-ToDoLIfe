package com.cda.todolife.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.StatistiquesGeneralesDto;
import com.cda.todolife.exception.StatistiquesGeneralesExistantes;
import com.cda.todolife.exception.StatistiquesGeneralesIntrouvables;
import com.cda.todolife.repository.IStatistiquesGeneralesRepository;
import com.cda.todolife.service.IStatistiquesGeneralesService;

@Service
public class StatistiquesGeneralesServiceImpl implements IStatistiquesGeneralesService {

	@Autowired
	private IStatistiquesGeneralesRepository statistiquesGeneralesDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public StatistiquesGeneralesDto FindById(int id)
			throws StatistiquesGeneralesIntrouvables, StatistiquesGeneralesExistantes {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(StatistiquesGeneralesDto statistiques)
			throws StatistiquesGeneralesIntrouvables, StatistiquesGeneralesExistantes {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) throws StatistiquesGeneralesIntrouvables {
		// TODO Auto-generated method stub

	}

	@Override
	public void add(StatistiquesGeneralesDto statistiques) throws StatistiquesGeneralesExistantes {
		// TODO Auto-generated method stub

	}

}
