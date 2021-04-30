package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.TacheDto;
import com.cda.todolife.exception.TacheExistanteException;
import com.cda.todolife.exception.TacheIntrouvableException;
import com.cda.todolife.model.Tache;
import com.cda.todolife.repository.ITacheRepository;
import com.cda.todolife.service.ITacheService;

@Service
public class TacheServiceImpl implements ITacheService {

	@Autowired
	private ITacheRepository tacheDao;

	@Autowired
	private ModelMapper modelMapper;

//	lister les taches
	@Override
	public List<TacheDto> findAll() {
		List<TacheDto> res = new ArrayList<>();
		this.tacheDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, TacheDto.class)));
		return res;
	}

// trouver par id
	@Override
	public TacheDto findById(int id) throws TacheIntrouvableException {
		return this.modelMapper.map(this.tacheDao.findById(id).get(), TacheDto.class);

	}

//	trouver par nom
	@Override
	public TacheDto findByLabel(String label) throws TacheIntrouvableException {
		return this.modelMapper.map(this.tacheDao.findByLabel(label), TacheDto.class);
	}

	// mettre à jour un film
	@Override
	public void update(TacheDto tache) throws TacheIntrouvableException, TacheExistanteException {
		try {
			this.tacheDao.findById(tache.getIdTache()).orElseThrow(TacheIntrouvableException::new);
			this.tacheDao.save(this.modelMapper.map(tache, Tache.class));
		} catch (TacheIntrouvableException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	// supprimer un film
	@Override
	public void deleteById(int id) throws TacheIntrouvableException {
		this.tacheDao.findById(id).orElseThrow(TacheIntrouvableException::new);
		this.tacheDao.deleteById(id);
	}

	@Override
	public List<TacheDto> findTaskByIdList(int id) {
//		return this.tacheDao.findTaskByIdList(id);

		List<TacheDto> res = new ArrayList<>();
		this.tacheDao.findTaskByIdList(id).forEach(pres -> res.add(this.modelMapper.map(pres, TacheDto.class)));
		return res;
	}

//	ajouter une tache
	@Override
	public void add(String label, boolean donne, byte priorite) throws TacheExistanteException {
//		Tache tache = Tache.builder().label(label).donne(donne).priorite(priorite).build();
//		this.tacheDao.save(tache);
	}
}