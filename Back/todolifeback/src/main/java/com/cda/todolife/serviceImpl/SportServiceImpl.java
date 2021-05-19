package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.SportDto;
import com.cda.todolife.exception.SportExistant;
import com.cda.todolife.exception.SportIntrouvable;
import com.cda.todolife.model.Sport;
import com.cda.todolife.repository.ISportRepository;
import com.cda.todolife.service.ISportService;

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
	public SportDto FindById(int id) throws SportIntrouvable {
		return this.modelMapper.map(this.SportDao.findById(id).orElseThrow(SportIntrouvable::new), SportDto.class);
	}

//	@Override
//	public SportDto FindByLabel(String label) throws SportIntrouvable, SportExistant {
//		// TODO Auto-generated method stub
//		return null;
//	}

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
			this.SportDao.save(this.modelMapper.map(spor, Sport.class));
		}
	}

}
