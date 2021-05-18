package com.cda.todolife.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.TraceDto;
import com.cda.todolife.exception.TraceExistante;
import com.cda.todolife.exception.TraceIntrouvable;
import com.cda.todolife.repository.ITraceRepository;
import com.cda.todolife.service.ITraceService;

@Service
public class TraceServiceImpl implements ITraceService {

	@Autowired
	private ITraceRepository traceDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public TraceDto FindById(int id) throws TraceIntrouvable, TraceExistante {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(TraceDto trace) throws TraceIntrouvable, TraceExistante {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) throws TraceIntrouvable {
		// TODO Auto-generated method stub

	}

	@Override
	public void add(TraceDto trace) throws TraceExistante {
		// TODO Auto-generated method stub

	}

}
