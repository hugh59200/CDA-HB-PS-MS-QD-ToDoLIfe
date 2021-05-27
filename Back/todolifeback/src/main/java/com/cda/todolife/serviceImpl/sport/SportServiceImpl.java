package com.cda.todolife.serviceImpl.sport;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.SportDto;
import com.cda.todolife.exception.sport.SportExistant;
import com.cda.todolife.exception.sport.SportIntrouvable;
import com.cda.todolife.model.sport.Sport;
import com.cda.todolife.repository.sport.ISportRepository;
import com.cda.todolife.service.sport.ISportService;

@Service
public class SportServiceImpl implements ISportService {

	@Autowired
	private ISportRepository SportDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<SportDto> findAll() {
		List<SportDto> res = new ArrayList<>();
		this.SportDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, SportDto.class)));
		return res;
	}

	@Override
	public SportDto FindByLabel(String label) throws SportIntrouvable {
		return this.modelMapper.map(this.SportDao.findByLabel(label), SportDto.class);
	}

	@Override
	public void update(SportDto sport) throws SportIntrouvable {
		this.SportDao.findById(sport.getIdSport()).orElseThrow(SportIntrouvable::new);
		this.SportDao.save(this.modelMapper.map(sport, Sport.class));
	}

	@Override
	public void deleteById(int id) throws SportIntrouvable {
		this.SportDao.findById(id).orElseThrow(SportIntrouvable::new);
		this.SportDao.deleteById(id);
	}

	@Override
	public void add(SportDto sport) throws SportExistant {
		Optional<Sport> spor = this.SportDao.findById(sport.getIdSport());
		if (spor.isPresent()) {
			throw new SportExistant();
		} else {
			System.out.println(spor);
			this.SportDao.save(this.modelMapper.map(sport, Sport.class));
		}
	}

	@Override
	public List<SportDto> findAllByLabel() {
		List<SportDto> res = new ArrayList<>();
		this.SportDao.label().forEach(pres -> res.add(this.modelMapper.map(pres, SportDto.class)));
		return res;
	}

	@Override
	public List<SportDto> startWith(String car) {
		List<SportDto> res = new ArrayList<>();
		this.SportDao.startWith(car).forEach(pres -> res.add(this.modelMapper.map(pres, SportDto.class)));
		return res;
	}

}
