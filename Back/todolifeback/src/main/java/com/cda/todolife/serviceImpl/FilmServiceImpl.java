package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dao.IFilmDao;
import com.cda.todolife.dto.FilmDto;
import com.cda.todolife.exception.film.FilmIntrouvableException;
import com.cda.todolife.exception.film.FilmeExistantException;
import com.cda.todolife.model.Film;
import com.cda.todolife.service.IFilmService;

@Service
public class FilmServiceImpl implements IFilmService {

	@Autowired
	private IFilmDao filmDao;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter un film
	@Override
	public void add(FilmDto film) throws FilmeExistantException {
		Optional<Film> probEntOpt = this.filmDao.findById(film.getIdFilm());
		if (probEntOpt.isPresent()) {
			throw new FilmeExistantException();
		} else {
			this.filmDao.save(this.modelMapper.map(film, Film.class));
		}
	}

//	lister les film
	@Override
	public List<FilmDto> findAll() {
		List<FilmDto> res = new ArrayList<>();
		this.filmDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, FilmDto.class)));
		System.out.println(res);
		return res;
	}

// trouver par id
	@Override
	public FilmDto findById(int id) throws FilmIntrouvableException {
		return this.modelMapper.map(this.filmDao.findById(id).get(), FilmDto.class);

	}

//	trouver par nom
	@Override
	public FilmDto findByName(String name) throws FilmIntrouvableException {
		return this.modelMapper.map(this.filmDao.findByName(name), FilmDto.class);
	}

	// mettre à jour un film
	@Override
	public void update(FilmDto film) throws FilmIntrouvableException, FilmeExistantException {
		try {
			this.filmDao.findById(film.getIdFilm()).orElseThrow(FilmIntrouvableException::new);
			this.filmDao.save(this.modelMapper.map(film, Film.class));
		} catch (FilmIntrouvableException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	// supprimer un film
	@Override
	public void deleteById(int id) throws FilmIntrouvableException {
		this.filmDao.findById(id).orElseThrow(FilmIntrouvableException::new);
		this.filmDao.deleteById(id);
	}
}