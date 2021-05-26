package com.cda.todolife.serviceImpl.sport;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.StatistiquesDto;
import com.cda.todolife.exception.sport.StatistiquesExistantes;
import com.cda.todolife.exception.sport.StatistiquesIntrouvables;
import com.cda.todolife.model.sport.Statistiques;
import com.cda.todolife.repository.sport.IStatistiquesRepository;
import com.cda.todolife.service.sport.IStatistiquesService;

@Service
public class StatistiquesServiceImpl implements IStatistiquesService {

	@Autowired
	private IStatistiquesRepository statistiquesDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public StatistiquesDto findByUserId(int id) throws StatistiquesIntrouvables {
		
		Statistiques stat = this.statistiquesDao.findByUserId(id);
		return this.modelMapper.map(stat, StatistiquesDto.class);
	}

	@Override
	public void update(StatistiquesDto statistiques) throws StatistiquesIntrouvables {
		this.statistiquesDao.findById(statistiques.getIdStatistiques()).orElseThrow(StatistiquesIntrouvables::new);
		this.statistiquesDao.save(this.modelMapper.map(statistiques, Statistiques.class));
	}

	@Override
	public void deleteById(int id) throws StatistiquesIntrouvables {
		this.statistiquesDao.findById(id).orElseThrow(StatistiquesIntrouvables::new);
		this.statistiquesDao.deleteById(id);
	}

	@Override
	public void add(StatistiquesDto statistiques) throws StatistiquesExistantes {
		Optional<Statistiques> stat = this.statistiquesDao.findById(statistiques.getIdStatistiques());
		if (stat.isPresent()) {
			throw new StatistiquesExistantes();
		} else {
			this.statistiquesDao.save(this.modelMapper.map(statistiques, Statistiques.class));
		}
	}

	@Override
	public StatistiquesDto FindById(int id) throws StatistiquesIntrouvables {
		return this.modelMapper.map(this.statistiquesDao.findById(id), StatistiquesDto.class);
	}
}
