package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.LivreDto;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.LivreExistantException;
import com.cda.todolife.exception.LivreIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.model.Livre;
import com.cda.todolife.model.WatchList;
import com.cda.todolife.repository.IWatchListRepository;
import com.cda.todolife.repository.IlivreRepository;
import com.cda.todolife.service.ILivreService;

@Service
public class LivreServiceImpl implements ILivreService {

	@Autowired
	private IlivreRepository livreService;

	@Autowired
	private IWatchListRepository watchlistService;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter un livre
	@Override
	public void add(LivreDto livre, int id) throws LivreExistantException, WatchListIntrouvableException {

		Optional<WatchList> watchlistOpt = this.watchlistService.findByUtilisateurIdUtilisateur(id);

		if (watchlistOpt.isEmpty()) {
			throw new WatchListIntrouvableException();
		} else {
			Optional<Livre> probEntOpt = this.livreService.findById(livre.getIdLivre());
			if (probEntOpt.isPresent()) {
				throw new LivreExistantException();
			} else {
				livre.setWatchListDto(this.modelMapper.map(watchlistOpt.get(), WatchListDto.class));
				this.livreService.save(this.modelMapper.map(livre, Livre.class));
			}
		}
	}

	// lister les livres d'un utilisateur
	@Override
	public List<LivreDto> findAllByIdUtilisateur(int id) {

		Optional<WatchList> watchlist = this.watchlistService.findByUtilisateurIdUtilisateur(id);
		List<LivreDto> livreDto = new ArrayList<LivreDto>();
		this.livreService.findAllBywatchListIdWatchList(watchlist.get().getIdWatchList())
				.forEach(res -> livreDto.add(this.modelMapper.map(res, LivreDto.class)));

		return livreDto;
	}

//	lister les livres
	@Override
	public List<LivreDto> findAll() {
		List<LivreDto> res = new ArrayList<>();
		this.livreService.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, LivreDto.class)));
		return res;
	}

// trouver par id
	@Override
	public LivreDto findById(int id) throws LivreIntrouvableException {
		return this.modelMapper.map(this.livreService.findById(id).get(), LivreDto.class);
	}

// trouver par titre
	@Override
	public LivreDto findByTitle(String livre) throws LivreIntrouvableException {
		return this.modelMapper.map(this.livreService.findByTitle(livre), LivreDto.class);
	}

// trouver par pageActuel
	@Override
	public LivreDto findByPageActuel(int page) throws LivreIntrouvableException {
		return this.modelMapper.map(this.livreService.findByPageActuel(page), LivreDto.class);
	}

// mettre à jour un livre	
	@Override
	public void update(LivreDto livre) throws LivreIntrouvableException, LivreExistantException {
		try {
			this.livreService.findById(livre.getIdLivre()).orElseThrow(LivreIntrouvableException::new);
			this.livreService.save(this.modelMapper.map(livre, Livre.class));
		} catch (LivreIntrouvableException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

//  supprimer un livre
	@Override
	public void deleteById(int id) throws LivreIntrouvableException {
		this.livreService.findById(id).orElseThrow(LivreIntrouvableException::new);
		this.livreService.deleteById(id);
	}

}