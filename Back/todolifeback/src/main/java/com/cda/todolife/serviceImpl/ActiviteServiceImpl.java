package com.cda.todolife.serviceImpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.ActiviteDto;
import com.cda.todolife.exception.ActiviteExistante;
import com.cda.todolife.exception.ActiviteIntrouvable;
import com.cda.todolife.repository.IActiviteRepository;
import com.cda.todolife.service.IActiviteService;

@Service
public class ActiviteServiceImpl implements IActiviteService {

	@Autowired
	private IActiviteRepository activiteDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<ActiviteDto> FindActiviteByUserId(int id) throws ActiviteIntrouvable, ActiviteExistante {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ActiviteDto> FindActiviteBySportId(int id) throws ActiviteIntrouvable, ActiviteExistante {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(ActiviteDto activite) throws ActiviteIntrouvable, ActiviteExistante {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) throws ActiviteIntrouvable {
		// TODO Auto-generated method stub

	}

	@Override
	public void add(ActiviteDto activite) throws ActiviteExistante {
		// TODO Auto-generated method stub

	}

}
