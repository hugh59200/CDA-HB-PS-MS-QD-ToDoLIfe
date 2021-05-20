package com.cda.todolife.serviceImpl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.TraceDto;
import com.cda.todolife.exception.TraceExistante;
import com.cda.todolife.exception.TraceIntrouvable;
import com.cda.todolife.model.Trace;
import com.cda.todolife.repository.ITraceRepository;
import com.cda.todolife.service.ITraceService;

@Service
public class TraceServiceImpl implements ITraceService {

	@Autowired
	private ITraceRepository traceDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public TraceDto FindById(int id) throws TraceIntrouvable {
		return this.modelMapper.map(this.traceDao.findById(id).orElseThrow(TraceIntrouvable::new), TraceDto.class);
	}

	@Override
	public void update(TraceDto trace) throws TraceIntrouvable {
		this.traceDao.findById(trace.getIdTrace()).orElseThrow(TraceIntrouvable::new);
		this.traceDao.save(this.modelMapper.map(trace, Trace.class));
	}

	@Override
	public void deleteById(int id) throws TraceIntrouvable {
		this.traceDao.findById(id).orElseThrow(TraceIntrouvable::new);
		this.traceDao.deleteById(id);
	}

	@Override
	public void add(TraceDto trace) throws TraceExistante {
		Optional<Trace> tra = this.traceDao.findById(trace.getIdTrace());
		if (tra.isPresent()) {
			throw new TraceExistante();
		} else {
			this.traceDao.save(this.modelMapper.map(trace, Trace.class));
		}
	}

	@Override
	public TraceDto FindByLabel(String label) throws TraceIntrouvable {
		return this.modelMapper.map(this.traceDao.findByLabel(label), TraceDto.class);
	}

}
