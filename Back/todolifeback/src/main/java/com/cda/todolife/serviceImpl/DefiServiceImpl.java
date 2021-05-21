package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.DefiDto;
import com.cda.todolife.exception.DefiExistant;
import com.cda.todolife.exception.DefiIntrouvable;
import com.cda.todolife.model.Defi;
import com.cda.todolife.repository.IDefiRepository;
import com.cda.todolife.service.IDefiService;

@Service
public class DefiServiceImpl implements IDefiService {

	@Autowired
	private IDefiRepository defiDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<DefiDto> FindDefiByUserId(int id) throws DefiIntrouvable {
		List<DefiDto> res = new ArrayList<>();
		this.defiDao.FindDefiByUserId(id).forEach(pres -> res.add(this.modelMapper.map(pres, DefiDto.class)));
		return res;
	}

	@Override
	public List<DefiDto> FindDefiBySportId(int idSport, int idUser) throws DefiIntrouvable {
		List<DefiDto> res = new ArrayList<>();
		this.defiDao.FindDefiBySportId(idSport, idUser).forEach(pres -> res.add(this.modelMapper.map(pres, DefiDto.class)));
		return res;
	}

	@Override
	public List<DefiDto> FindCompletedDefi(int id) throws DefiIntrouvable {
		List<DefiDto> res = new ArrayList<>();
		this.defiDao.FindCompletedDefi(id).forEach(pres -> res.add(this.modelMapper.map(pres, DefiDto.class)));
		return res;
	}

	@Override
	public void update(DefiDto defi) throws DefiIntrouvable {
		this.defiDao.findById(defi.getIdDefi()).orElseThrow(DefiIntrouvable::new);
		this.defiDao.save(this.modelMapper.map(defi, Defi.class));
	}

	@Override
	public void deleteById(int id) throws DefiIntrouvable {
		this.defiDao.findById(id).orElseThrow(DefiIntrouvable::new);
		this.defiDao.deleteById(id);
	}

	@Override
	public void add(DefiDto defi) throws DefiExistant {
		Optional<Defi> def = this.defiDao.findById(defi.getIdDefi());
		if (def.isPresent()) {
			throw new DefiExistant();
		} else {
			this.defiDao.save(this.modelMapper.map(defi, Defi.class));
		}
	}

	@Override
	public DefiDto FindById(int id) throws DefiIntrouvable {
		return this.modelMapper.map(this.defiDao.findById(id).orElseThrow(DefiIntrouvable::new), DefiDto.class);
	}

	@Override
	public List<DefiDto> FindUncomplete(int id) throws DefiIntrouvable {
		List<DefiDto> res = new ArrayList<>();
		this.defiDao.FindUncompletedDef(id).forEach(pres -> res.add(this.modelMapper.map(pres, DefiDto.class)));
		return res;
	}

	@Override
	public DefiDto FindByLabel(int id, String label) throws DefiIntrouvable {
		return this.modelMapper.map(this.defiDao.findByLabel(id, label), DefiDto.class);
	}

}
