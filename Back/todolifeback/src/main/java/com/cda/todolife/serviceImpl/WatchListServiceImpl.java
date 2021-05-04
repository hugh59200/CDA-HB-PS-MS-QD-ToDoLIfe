package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.WatchListExistanteException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.model.Utilisateur;
import com.cda.todolife.model.WatchList;
import com.cda.todolife.repository.IUtilisateurRepository;
import com.cda.todolife.repository.IWatchListRepository;
import com.cda.todolife.service.IWatchListService;

@Service
public class WatchListServiceImpl implements IWatchListService {

	@Autowired
	private IWatchListRepository watchListService;
	@Autowired
	private IUtilisateurRepository utilisateurService;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter une watchList
	@Override
	public void add(WatchListDto watchListDto, int id) throws WatchListExistanteException {

		Optional<WatchList> probEntOpt = this.watchListService
				.findById(id);
		if (probEntOpt.isPresent()) {
			throw new WatchListExistanteException();
		} else {
			Optional<Utilisateur> userDto = this.utilisateurService.findById(id);
			watchListDto.setUtilisateur(this.modelMapper.map(userDto.get(), UtilisateurDto.class));
			
			this.watchListService.save(this.modelMapper.map(watchListDto, WatchList.class));
		}
	}

//	lister les wtachList
	@Override
	public List<WatchListDto> findAll() {
		List<WatchListDto> res = new ArrayList<>();
		this.watchListService.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, WatchListDto.class)));
		return res;
	}

// trouver par id
	@Override
	public WatchListDto findById(int id) throws WatchListIntrouvableException {

		return this.modelMapper.map(this.watchListService.findById(id).get(), WatchListDto.class);
	}

//	trouver par label
	@Override
	public WatchListDto findByLabel(String label) throws WatchListIntrouvableException {
		return this.modelMapper.map(this.watchListService.findByLabel(label), WatchListDto.class);
	}

//	mettre à jour une watchlist
	@Override
	public void update(WatchListDto watchList) throws WatchListIntrouvableException, WatchListExistanteException {
		try {
			this.watchListService.findById(watchList.getIdWatchList()).orElseThrow(WatchListIntrouvableException::new);
			this.watchListService.save(this.modelMapper.map(watchList, WatchList.class));
		} catch (WatchListIntrouvableException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

//	supprimer une watchlist
	@Override
	public void deleteById(int id) throws WatchListIntrouvableException {
		this.watchListService.findById(id).orElseThrow(WatchListIntrouvableException::new);
		this.watchListService.deleteById(id);
	}

	@Override
	public Boolean findByIdUtilisateur(int id) {
		Optional<WatchList> watchListOptional = this.watchListService.findByUtilisateurIdUtilisateur(id);
		if (watchListOptional.isPresent()) {
			return true;
		} else {
			return false;
		}
	}
}
