package com.cda.todolife.service.sport;

import java.util.List;

import com.cda.todolife.dto.sport.BadgeDto;
import com.cda.todolife.exception.sport.BadgeExistant;
import com.cda.todolife.exception.sport.BadgeIntrouvable;

public interface IBadgeService {
	
	BadgeDto findById (int id) throws BadgeIntrouvable;

//	List<BadgeDto> FindBadgeBySportId(int id) throws BadgeIntrouvable;
	
	List<BadgeDto> FindByStatId(int id) throws BadgeIntrouvable;
	
	List<BadgeDto> FindBadgeBySportId(int idStat, int idSport) throws BadgeIntrouvable;
	
	BadgeDto FindBadgeByLabel(int id, String label) throws BadgeIntrouvable;

	void update(BadgeDto badge) throws BadgeIntrouvable;

	void deleteById(int id) throws BadgeIntrouvable;

	void add(BadgeDto badge) throws BadgeExistant;
}
