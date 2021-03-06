package com.cda.todolife.serviceImpl.sport;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.BadgeDto;
import com.cda.todolife.exception.sport.BadgeExistant;
import com.cda.todolife.exception.sport.BadgeIntrouvable;
import com.cda.todolife.model.sport.Badge;
import com.cda.todolife.repository.sport.IBadgeRepository;
import com.cda.todolife.service.sport.IBadgeService;

@Service
public class BadgeServiceImpl implements IBadgeService {

	@Autowired
	private IBadgeRepository badgeDao;

	@Autowired
	private ModelMapper modelMapper;

//	@Override
//	public List<BadgeDto> FindBadgeBySportId(int id) throws BadgeIntrouvable {
//		List<BadgeDto> res = new ArrayList<>();
//		this.badgeDao.FindBadgeBySportId(id).forEach(pres -> res.add(this.modelMapper.map(pres, BadgeDto.class)));
//		return res;
//	}

	@Override
	public void update(BadgeDto badge) throws BadgeIntrouvable {
		this.badgeDao.findById(badge.getIdBadge()).orElseThrow(BadgeIntrouvable::new);
		this.badgeDao.save(this.modelMapper.map(badge, Badge.class));
	}

	@Override
	public void deleteById(int id) throws BadgeIntrouvable {
		this.badgeDao.findById(id).orElseThrow(BadgeIntrouvable::new);
		this.badgeDao.deleteById(id);
	}

	@Override
	public void add(BadgeDto badge) throws BadgeExistant {
		Optional<Badge> bad = this.badgeDao.findById(badge.getIdBadge());
		if (bad.isPresent()) {
			throw new BadgeExistant();
		} else {
			this.badgeDao.save(this.modelMapper.map(badge, Badge.class));
		}
	}

	@Override
	public BadgeDto findById(int id) throws BadgeIntrouvable {
		return this.modelMapper.map(this.badgeDao.findById(id).orElseThrow(BadgeIntrouvable::new), BadgeDto.class);
	}

	@Override
	public List<BadgeDto> FindByStatId(int id) throws BadgeIntrouvable {
		List<BadgeDto> res = new ArrayList<>();
		this.badgeDao.FindBadgeByStatId(id).forEach(pres -> res.add(this.modelMapper.map(pres, BadgeDto.class)));
		return res;
	}

	@Override
	public List<BadgeDto> FindBadgeBySportId(int idStat, int idSport) throws BadgeIntrouvable {
		List<BadgeDto> res = new ArrayList<>();
		this.badgeDao.FindBadgeBySportId(idStat, idSport).forEach(pres -> res.add(this.modelMapper.map(pres, BadgeDto.class)));
		return res;
	}

	@Override
	public BadgeDto FindBadgeByLabel(int id, String label) throws BadgeIntrouvable {
		return this.modelMapper.map(this.badgeDao.FindBadgeByLabel(id, label), BadgeDto.class);
	}
}
