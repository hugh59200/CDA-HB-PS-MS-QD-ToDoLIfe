package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dao.ISerieDao;
import com.cda.todolife.dto.SerieDto;
import com.cda.todolife.exception.serie.SerieExistanteException;
import com.cda.todolife.exception.serie.SerieIntrouvableException;
import com.cda.todolife.model.Serie;
import com.cda.todolife.service.ISerieService;

@Service
public class SerieServiceImpl implements ISerieService {

	@Autowired
	private ISerieDao serieDao;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter une série
	@Override
	public void add(SerieDto serie) throws SerieExistanteException {
		Optional<Serie> probEntOpt = this.serieDao.findById(serie.getIdSerie());
		if (probEntOpt.isPresent()) {
			throw new SerieExistanteException();
		} else {
			this.serieDao.save(this.modelMapper.map(serie, Serie.class));
		}
	}

// lister toutes les séries
	@Override
	public List<SerieDto> findAll() {
		List<SerieDto> res = new ArrayList<>();
		this.serieDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, SerieDto.class)));
		return res;
	}

//	trouver par id
	@Override
	public SerieDto findById(int id) throws SerieIntrouvableException {
		return this.modelMapper.map(this.serieDao.findById(id).get(), SerieDto.class);
	}

//	trouver par nom
	@Override
	public SerieDto findByName(String name) throws SerieIntrouvableException {
		return this.modelMapper.map(this.serieDao.findByName(name), SerieDto.class);
	}

//	trouver par saison
	@Override
	public SerieDto findBySaison(int saison) throws SerieIntrouvableException {
		return this.modelMapper.map(this.serieDao.findBySaison(saison), SerieDto.class);
	}

//	trouver par episode
	@Override
	public SerieDto findByEpisode(int episode) throws SerieIntrouvableException {
		return this.modelMapper.map(this.serieDao.findByEpisode(episode), SerieDto.class);
	}

// mettre à jour une série
	@Override
	public void update(SerieDto serie) throws SerieIntrouvableException, SerieExistanteException {
		Optional<Serie> serieOpt = this.serieDao.findById(serie.getIdSerie());
		if (serieOpt.isPresent()) {
			System.out.println(serieOpt);
			this.serieDao.save(this.modelMapper.map(serie, Serie.class));
		} else {
			throw new SerieIntrouvableException();
		}
	}

// supprimer une série
	@Override
	public void deleteById(int id) throws SerieIntrouvableException {
		this.serieDao.findById(id).orElseThrow(SerieIntrouvableException::new);
		this.serieDao.deleteById(id);
	}
}
