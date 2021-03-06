package com.cda.todolife.serviceImpl.sport;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.StatistiquesSportivesDto;
import com.cda.todolife.exception.sport.StatistiquesSportivesExistantes;
import com.cda.todolife.exception.sport.StatistiquesSportivesIntrouvables;
import com.cda.todolife.model.sport.StatistiquesSportives;
import com.cda.todolife.repository.sport.IStatistiquesSportivesRepository;
import com.cda.todolife.service.sport.IStatistiquesSportivesService;

@Service
public class StatistiquesSportivesServiceImpl implements IStatistiquesSportivesService {

	@Autowired
	private IStatistiquesSportivesRepository statistiquesSportivesDao;

	@Autowired
	private ModelMapper modelMapper;

//	@Override
//	public List<StatistiquesSportivesDto> FindByStatId(int id) throws StatistiquesSportivesIntrouvables {
//		List<StatistiquesSportivesDto> res = new ArrayList<>();
//		this.statistiquesSportivesDao.FindStatistiquesByStatId().forEach(pres -> res.add(this.modelMapper.map(pres, StatistiquesSportivesDto.class)));
//		return res;
//	}

	@Override
	public void update(StatistiquesSportivesDto statistiques) throws StatistiquesSportivesIntrouvables {
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
			this.statistiquesSportivesDao.save(this.modelMapper.map(statistiques, StatistiquesSportives.class));
		}
	}

	@Override
	public List<StatistiquesSportivesDto> findByStatId(int id) throws StatistiquesSportivesIntrouvables {
		List<StatistiquesSportivesDto> res = new ArrayList<>();
//		this.statistiquesSportivesDao.FindStatistiquesByStatId(id);
		this.statistiquesSportivesDao.FindStatistiquesByStatId(id).forEach(pres -> res.add(this.modelMapper.map(pres, StatistiquesSportivesDto.class)));
		return res;
	}

	@Override
	public StatistiquesSportivesDto findById(int id) throws StatistiquesSportivesIntrouvables {
		return this.modelMapper.map(this.statistiquesSportivesDao.findById(id).get(), StatistiquesSportivesDto.class);
	}
	
//	List<DefiDto> res = new ArrayList<>();
//	this.defiDao.FindDefiBySportId(id).forEach(pres -> res.add(this.modelMapper.map(pres, DefiDto.class)));
//	return res;

}
