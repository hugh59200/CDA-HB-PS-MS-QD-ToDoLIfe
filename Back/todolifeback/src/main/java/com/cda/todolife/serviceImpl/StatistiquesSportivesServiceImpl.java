package com.cda.todolife.serviceImpl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.StatistiquesSportivesDto;
import com.cda.todolife.exception.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.StatistiquesSportivesIntrouvables;
import com.cda.todolife.model.StatistiquesSportives;
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
			throws StatistiquesSportivesIntrouvables {
		return this.modelMapper.map(
				this.statistiquesSportivesDao.findById(id).orElseThrow(StatistiquesSportivesIntrouvables::new),
				StatistiquesSportivesDto.class);
	}

	@Override
	public void update(StatistiquesSportivesDto statistiques)
			throws StatistiquesSportivesIntrouvables {
		this.statistiquesSportivesDao.findById(statistiques.getIdStatistiquesSportives())
				.orElseThrow(StatistiquesSportivesIntrouvables::new);
		this.statistiquesSportivesDao.save(this.modelMapper.map(statistiques, StatistiquesSportives.class));
	}

	@Override
	public void deleteById(int id) throws StatistiquesSportivesIntrouvables {
		this.statistiquesSportivesDao.findById(id).orElseThrow(StatistiquesSportivesIntrouvables::new);
		this.statistiquesSportivesDao.deleteById(id);
	}

	@Override
	public void add(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesExistantes {
		Optional<StatistiquesSportives> stat = this.statistiquesSportivesDao
				.findById(statistiques.getIdStatistiquesSportives());
		if (stat.isPresent()) {
			throw new StatistiquesSportivesExistantes();
		} else {
			this.statistiquesSportivesDao.save(this.modelMapper.map(stat, StatistiquesSportives.class));
		}
	}

}
