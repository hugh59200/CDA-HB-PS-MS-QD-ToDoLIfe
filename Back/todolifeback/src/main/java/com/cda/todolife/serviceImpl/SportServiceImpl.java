package com.cda.todolife.serviceImpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.SportDto;
import com.cda.todolife.exception.SportExistant;
import com.cda.todolife.exception.SportIntrouvable;
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SportDto FindById(int id) throws SportIntrouvable, SportExistant {
		// TODO Auto-generated method stub
		return null;
	}

//	@Override
//	public SportDto FindByLabel(String label) throws SportIntrouvable, SportExistant {
//		// TODO Auto-generated method stub
//		return null;
//	}

	@Override
	public void update(SportDto sport) throws SportIntrouvable, SportExistant {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) throws SportIntrouvable {
		// TODO Auto-generated method stub

	}

	@Override
	public void add(SportDto sport) throws SportExistant {
		// TODO Auto-generated method stub

	}

}
