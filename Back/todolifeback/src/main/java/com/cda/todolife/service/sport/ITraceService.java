package com.cda.todolife.service.sport;

import com.cda.todolife.dto.sport.TraceDto;
import com.cda.todolife.exception.sport.TraceExistante;
import com.cda.todolife.exception.sport.TraceIntrouvable;

public interface ITraceService {

	TraceDto FindById(int id) throws TraceIntrouvable;
	
	TraceDto FindByLabel(String label) throws TraceIntrouvable;

	void update(TraceDto trace) throws TraceIntrouvable;

	void deleteById(int id) throws TraceIntrouvable;

	void add(TraceDto trace) throws TraceExistante;
}
