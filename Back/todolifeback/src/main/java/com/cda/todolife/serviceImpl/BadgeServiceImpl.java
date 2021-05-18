package com.cda.todolife.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.BadgeDto;
import com.cda.todolife.exception.BadgeExistant;
import com.cda.todolife.exception.BadgeIntrouvable;
import com.cda.todolife.repository.IBadgeRepository;
import com.cda.todolife.service.IBadgeService;

@Service
public class BadgeServiceImpl implements IBadgeService {

	@Autowired
	private IBadgeRepository BadgeDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public BadgeDto FindBadgeBySportId(int id) throws BadgeIntrouvable, BadgeExistant {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(BadgeDto badge) throws BadgeIntrouvable, BadgeExistant {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) throws BadgeIntrouvable {
		// TODO Auto-generated method stub

	}

	@Override
	public void add(BadgeDto badge) throws BadgeExistant {
		// TODO Auto-generated method stub

	}

}
