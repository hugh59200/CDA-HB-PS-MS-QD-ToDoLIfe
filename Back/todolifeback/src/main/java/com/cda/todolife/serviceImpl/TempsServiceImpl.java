package com.cda.todolife.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.TempsDto;
import com.cda.todolife.exception.TempsIntrouvable;
import com.cda.todolife.model.Temps;
import com.cda.todolife.repository.ITempsRepository;
import com.cda.todolife.service.ITempsService;

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
