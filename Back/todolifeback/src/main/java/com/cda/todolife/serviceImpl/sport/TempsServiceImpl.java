package com.cda.todolife.serviceImpl.sport;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.TempsDto;
import com.cda.todolife.exception.sport.TempsIntrouvable;
import com.cda.todolife.model.sport.Temps;
import com.cda.todolife.repository.sport.ITempsRepository;
import com.cda.todolife.service.sport.ITempsService;

@Service
public class TempsServiceImpl implements ITempsService {

	@Autowired
	private ITempsRepository tempsDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public TempsDto FindById(int id) throws TempsIntrouvable {
		return this.modelMapper.map(this.tempsDao.findById(id).orElseThrow(TempsIntrouvable::new), TempsDto.class);
	}

	@Override
	public void update(TempsDto temps) throws TempsIntrouvable {
		this.tempsDao.findById(temps.getIdTemps()).orElseThrow(TempsIntrouvable::new);
		this.tempsDao.save(this.modelMapper.map(temps, Temps.class));
	}

	@Override
	public void deleteById(int id) throws TempsIntrouvable {
		this.tempsDao.findById(id).orElseThrow(TempsIntrouvable::new);
		this.tempsDao.deleteById(id);
	}

	@Override
	public void add(TempsDto temps) {
		this.tempsDao.save(this.modelMapper.map(temps, Temps.class));
	}

	@Override
	public TempsDto findTemps(int h, int m, int s) throws TempsIntrouvable {
		return this.modelMapper.map(this.tempsDao.findTemps(h, m, s), TempsDto.class);
	}
}
