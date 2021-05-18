package com.cda.todolife.service;

import com.cda.todolife.dto.BadgeDto;
import com.cda.todolife.exception.BadgeExistant;
import com.cda.todolife.exception.BadgeIntrouvable;

public interface IBadgeService {

	BadgeDto FindBadgeBySportId(int id) throws BadgeIntrouvable, BadgeExistant;

	void update(BadgeDto badge) throws BadgeIntrouvable, BadgeExistant;

	void deleteById(int id) throws BadgeIntrouvable;

	void add(BadgeDto badge) throws BadgeExistant;

}
