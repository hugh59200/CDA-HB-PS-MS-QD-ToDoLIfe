package com.cda.todolife.serviceImpl.sport;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.sport.ActiviteDto;
import com.cda.todolife.exception.sport.ActiviteExistante;
import com.cda.todolife.exception.sport.ActiviteIntrouvable;
import com.cda.todolife.model.sport.Activite;
import com.cda.todolife.repository.sport.IActiviteRepository;
import com.cda.todolife.service.sport.IActiviteService;

@Service
public class ActiviteServiceImpl implements IActiviteService {

	@Autowired
	private IActiviteRepository activiteDao;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<ActiviteDto> FindActiviteByUserId(int id) throws ActiviteIntrouvable {
		List<ActiviteDto> res = new ArrayList<>();
		this.activiteDao.FindActiviteByUserId(id).forEach(pres -> res.add(this.modelMapper.map(pres, ActiviteDto.class)));
		return res;
	}

	@Override
	public List<ActiviteDto> FindActiviteBySportId(int idUser, int idSport) throws ActiviteIntrouvable {
		List<ActiviteDto> res = new ArrayList<>();
		this.activiteDao.FindActiviteBySportId(idUser, idSport).forEach(pres -> res.add(this.modelMapper.map(pres, ActiviteDto.class)));
		return res;
	}

	@Override
	public void update(ActiviteDto activite) throws ActiviteIntrouvable {
		this.activiteDao.findById(activite.getIdActivite()).orElseThrow(ActiviteIntrouvable::new);
		this.activiteDao.save(this.modelMapper.map(activite, Activite.class));
	}

	@Override
	public void deleteById(int id) throws ActiviteIntrouvable {
		this.activiteDao.findById(id).orElseThrow(ActiviteIntrouvable::new);
		this.activiteDao.deleteById(id);
	}

	@Override
	public void add(ActiviteDto activite) throws ActiviteExistante {
		Optional<Activite> activ = this.activiteDao.findById(activite.getIdActivite());
		if (activ.isPresent()) {
			throw new ActiviteExistante();
		} else {
			this.activiteDao.save(this.modelMapper.map(activite, Activite.class));
		}
	}

//	@Override
//	public ActiviteDto FindById(int id) throws ActiviteIntrouvable {
//		return this.modelMapper.map(this.activiteDao.findById(id).orElseThrow(ActiviteIntrouvable::new), ActiviteDto.class);
//	}

	@Override
	public ActiviteDto findByLabel(int id, String label) throws ActiviteIntrouvable {
		return this.modelMapper.map(this.activiteDao.findByLabel(id,label), ActiviteDto.class);
	}
}