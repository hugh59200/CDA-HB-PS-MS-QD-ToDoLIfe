package com.cda.todolife.serviceImpl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.StatistiquesDto;
import com.cda.todolife.exception.StatistiquesExistantes;
import com.cda.todolife.exception.StatistiquesIntrouvables;
import com.cda.todolife.model.Statistiques;
import com.cda.todolife.repository.IStatistiquesRepository;
import com.cda.todolife.service.IStatistiquesService;

@Service
public class StatistiquesServiceImpl implements IStatistiquesService {

	@Autowired
	private IStatistiquesRepository statistiquesDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public StatistiquesDto FindStatistiquesByUserId(int id) throws StatistiquesIntrouvables {
		Statistiques res = this.statistiquesDao.FindStatistiquesByUserId(id);
		return this.modelMapper.map(res, StatistiquesDto.class);
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

}
