package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.watchlist.SerieDto;
import com.cda.todolife.dto.watchlist.WatchListDto;
import com.cda.todolife.exception.SerieExistanteException;
import com.cda.todolife.exception.SerieIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.model.watchlist.Serie;
import com.cda.todolife.model.watchlist.WatchList;
import com.cda.todolife.repository.ISerieRepository;
import com.cda.todolife.repository.IWatchListRepository;
import com.cda.todolife.service.ISerieService;

@Service
public class SerieServiceImpl implements ISerieService {

	@Autowired
	private ISerieRepository serieDao;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private IWatchListRepository watchlistService;

//	ajouter une série
	@Override
	public void add(SerieDto serie, int id) throws SerieExistanteException, WatchListIntrouvableException {

		Optional<WatchList> watchlistOpt = this.watchlistService.findByUtilisateurIdUtilisateur(id);

		if (watchlistOpt.isEmpty()) {
			throw new WatchListIntrouvableException();
		} else {
			Optional<Serie> probEntOpt = this.serieDao.findById(serie.getIdSerie());
			if (probEntOpt.isPresent()) {
				throw new SerieExistanteException();
			} else {
				serie.setWatchListDto(this.modelMapper.map(watchlistOpt.get(), WatchListDto.class));
				this.serieDao.save(this.modelMapper.map(serie, Serie.class));
			}
		}
	}

	// lister les series d'un utilisateur
	@Override
	public List<SerieDto> findAllByIdUtilisateur(int id) {
		Optional<WatchList> watchlist = this.watchlistService.findByUtilisateurIdUtilisateur(id);
		List<SerieDto> serieDao = new ArrayList<SerieDto>();
		this.serieDao.findAllBywatchListIdWatchList(watchlist.get().getIdWatchList())
				.forEach(res -> serieDao.add(this.modelMapper.map(res, SerieDto.class)));

		return serieDao;
	}

// lister toutes les séries
	@Override
	public List<SerieDto> findAll() {
		List<SerieDto> res = new ArrayList<>();
		this.serieDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, SerieDto.class)));
		return res;
	}

//	trouver par id
	// @Override
	// public SerieDto findById(int id) throws SerieIntrouvableException {
	// return this.modelMapper.map(this.serieDao.findById(id).get(),
	// SerieDto.class);
	// }

//	trouver par nom
	// @Override
	// public SerieDto findByName(String name) throws SerieIntrouvableException {
	// return this.modelMapper.map(this.serieDao.findByName(name), SerieDto.class);
	// }

//	trouver par saison
	// @Override
	// public SerieDto findBySaison(int saison) throws SerieIntrouvableException {
	// return this.modelMapper.map(this.serieDao.findBySaison(saison),
	// SerieDto.class);
	// }

//	trouver par episode
	// @Override
	// public SerieDto findByEpisode(int episode) throws SerieIntrouvableException {
	// return this.modelMapper.map(this.serieDao.findByEpisode(episode),
	// SerieDto.class);
	// }

// mettre à jour une série
	@Override
	public void update(SerieDto serie, int idSerie) throws SerieIntrouvableException, SerieExistanteException {

		Optional<Serie> serieTest = this.serieDao.findById(idSerie);

		if (serieTest.get().getIdSerie() == serie.getIdSerie()) {
			serie.setWatchListDto(this.modelMapper.map(serieTest.get().getWatchList(), WatchListDto.class));
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

	@Override
	public SerieDto findById(int id) throws SerieIntrouvableException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SerieDto findByName(String nom) throws SerieIntrouvableException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SerieDto findBySaison(int saison) throws SerieIntrouvableException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SerieDto findByEpisode(int episode) throws SerieIntrouvableException {
		// TODO Auto-generated method stub
		return null;
	}
}
