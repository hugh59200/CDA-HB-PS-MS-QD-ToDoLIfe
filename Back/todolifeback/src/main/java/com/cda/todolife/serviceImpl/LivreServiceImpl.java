package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.LivreDto;
import com.cda.todolife.exception.LivreExistantException;
import com.cda.todolife.exception.LivreIntrouvableException;
import com.cda.todolife.model.Livre;
import com.cda.todolife.repository.IlivreRepository;
import com.cda.todolife.service.ILivreService;

@Service
public class LivreServiceImpl implements ILivreService {

	@Autowired
	private IlivreRepository livreDao;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter un livre
	@Override
	public void add(LivreDto livre) throws LivreExistantException {
		Optional<Livre> probEntOpt = this.livreDao.findById(livre.getIdLivre());
		if (probEntOpt.isPresent()) {
			throw new LivreExistantException();
		} else {
			this.livreDao.save(this.modelMapper.map(livre, Livre.class));
		}

	}

//	lister les livres
	@Override
	public List<LivreDto> findAll() {
		List<LivreDto> res = new ArrayList<>();
		this.livreDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, LivreDto.class)));
		return res;
	}

// trouver par id
	@Override
	public LivreDto findById(int id) throws LivreIntrouvableException {
		return this.modelMapper.map(this.livreDao.findById(id).get(), LivreDto.class);
	}

// trouver par titre
	@Override
	public LivreDto findByTitle(String livre) throws LivreIntrouvableException {
		return this.modelMapper.map(this.livreDao.findByTitle(livre), LivreDto.class);
	}

// trouver par pageActuel
	@Override
	public LivreDto findByPageActuel(int page) throws LivreIntrouvableException {
		return this.modelMapper.map(this.livreDao.findByPageActuel(page), LivreDto.class);
	}

// mettre à jour un livre	
	@Override
	public void update(LivreDto livre) throws LivreIntrouvableException, LivreExistantException {
		try {
			this.livreDao.findById(livre.getIdLivre()).orElseThrow(LivreIntrouvableException::new);
			this.livreDao.save(this.modelMapper.map(livre, Livre.class));
		} catch (LivreIntrouvableException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

//  supprimer un livre
	@Override
	public void deleteById(int id) throws LivreIntrouvableException {
		this.livreDao.findById(id).orElseThrow(LivreIntrouvableException::new);
		this.livreDao.deleteById(id);
	}

}