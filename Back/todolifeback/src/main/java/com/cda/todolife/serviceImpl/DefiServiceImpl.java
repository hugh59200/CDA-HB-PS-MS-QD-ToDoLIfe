package com.cda.todolife.serviceImpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.DefiDto;
import com.cda.todolife.exception.DefiExistant;
import com.cda.todolife.exception.DefiIntrouvable;
import com.cda.todolife.repository.IDefiRepository;
import com.cda.todolife.service.IDefiService;

@Service
public class DefiServiceImpl implements IDefiService {

	@Autowired
	private IDefiRepository DefiDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<DefiDto> FindDefiByUserId(int id) throws DefiIntrouvable, DefiExistant {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DefiDto> FindDefiBySportId(int id) throws DefiIntrouvable, DefiExistant {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DefiDto> FindCompletedDefi(int id) throws DefiIntrouvable, DefiExistant {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(DefiDto defi) throws DefiIntrouvable, DefiExistant {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(int id) throws DefiIntrouvable {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void add(DefiDto defi) throws DefiExistant {
		// TODO Auto-generated method stub
		
	}



}
