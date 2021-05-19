package com.cda.todolife.service;

import java.util.List;

import com.cda.todolife.dto.BadgeDto;
import com.cda.todolife.exception.BadgeExistant;
import com.cda.todolife.exception.BadgeIntrouvable;

public interface IBadgeService {

	List<BadgeDto> FindBadgeBySportId(int id) throws BadgeIntrouvable;

	void update(BadgeDto badge) throws BadgeIntrouvable;

	void deleteById(int id) throws BadgeIntrouvable;

	void add(BadgeDto badge) throws BadgeExistant;
}
