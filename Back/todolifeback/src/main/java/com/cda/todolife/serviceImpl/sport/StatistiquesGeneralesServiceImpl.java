package com.cda.todolife.serviceImpl.sport;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.StatistiquesGeneralesDto;
import com.cda.todolife.exception.sport.StatistiquesGeneralesExistantes;
import com.cda.todolife.exception.sport.StatistiquesGeneralesIntrouvables;
import com.cda.todolife.model.sport.StatistiquesGenerales;
import com.cda.todolife.repository.sport.IStatistiquesGeneralesRepository;
import com.cda.todolife.service.sport.IStatistiquesGeneralesService;

@Service
public class StatistiquesGeneralesServiceImpl implements IStatistiquesGeneralesService {

	@Autowired
	private IStatistiquesGeneralesRepository statistiquesGeneralesDao;

	@Autowired
	private ModelMapper modelMapper;

//	@Override
//	public StatistiquesGeneralesDto FindByStatId(int id)
//			throws StatistiquesGeneralesIntrouvables {
//		return this.modelMapper.map(this.statistiquesGeneralesDao.findById(id).orElseThrow(StatistiquesGeneralesIntrouvables::new), StatistiquesGeneralesDto.class);
//
//	}

	@Override
	public void update(StatistiquesGeneralesDto statistiques)
			throws StatistiquesGeneralesIntrouvables {
		this.statistiquesGeneralesDao.findById(statistiques.getIdStatistiquesGenerales()).orElseThrow(StatistiquesGeneralesIntrouvables::new);
		this.statistiquesGeneralesDao.save(this.modelMapper.map(statistiques, StatistiquesGenerales.class));

	}

	@Override
	public void deleteById(int id) throws StatistiquesGeneralesIntrouvables {
		this.statistiquesGeneralesDao.findById(id).orElseThrow(StatistiquesGeneralesIntrouvables::new);
		this.statistiquesGeneralesDao.deleteById(id);
	}

	@Override
	public void add(StatistiquesGeneralesDto statistiques) throws StatistiquesGeneralesExistantes {
		Optional<StatistiquesGenerales> stat = this.statistiquesGeneralesDao.findById(statistiques.getIdStatistiquesGenerales());
		if (stat.isPresent()) {
			throw new StatistiquesGeneralesExistantes();
		} else {
			this.statistiquesGeneralesDao.save(this.modelMapper.map(statistiques, StatistiquesGenerales.class));
		}
	}

	@Override
	public StatistiquesGeneralesDto FindByStatId(int id) throws StatistiquesGeneralesIntrouvables {
		return this.modelMapper.map(this.statistiquesGeneralesDao.FindStatistiquesByStatId(id), StatistiquesGeneralesDto.class);
	}

}
