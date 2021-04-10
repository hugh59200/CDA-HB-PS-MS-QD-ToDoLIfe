package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dao.IWatchListDao;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.watchlist.WatchListExistanteException;
import com.cda.todolife.exception.watchlist.WatchListIntrouvableException;
import com.cda.todolife.model.WatchList;
import com.cda.todolife.service.IWatchListService;

@Service
public class WatchListServiceImpl implements IWatchListService {

	@Autowired
	private IWatchListDao watchListDao;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter une watchList
	@Override
	public void add(WatchListDto watchListDto) throws WatchListExistanteException {
		Optional<WatchList> probEntOpt = this.watchListDao.findById(watchListDto.getIdWatchList());
		if (probEntOpt.isPresent()) {
			throw new WatchListExistanteException();
		} else {
			this.watchListDao.save(this.modelMapper.map(watchListDto, WatchList.class));
		}
	}

//	lister les wtachList
	@Override
	public List<WatchListDto> findAll() {
		List<WatchListDto> res = new ArrayList<>();
		this.watchListDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, WatchListDto.class)));
		return res;
	}

// trouver par id
	@Override
	public WatchListDto findById(int id) throws WatchListIntrouvableException {
		return this.modelMapper.map(this.watchListDao.findById(id).get(), WatchListDto.class);
	}

//	trouver par label
	@Override
	public WatchListDto findByLabel(String label) throws WatchListIntrouvableException {
		return this.modelMapper.map(this.watchListDao.findByLabel(label), WatchListDto.class);
	}

//	mettre à jour une watchlist
	@Override
	public void update(WatchListDto watchList) throws WatchListIntrouvableException, WatchListExistanteException {
		try {
			this.watchListDao.findById(watchList.getIdWatchList()).orElseThrow(WatchListIntrouvableException :: new);
			this.watchListDao.save(this.modelMapper.map(watchList, WatchList.class));
		} catch (WatchListIntrouvableException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

//	supprimer une watchlist
	@Override
	public void deleteById(int id) throws WatchListIntrouvableException {
		this.watchListDao.findById(id).orElseThrow(WatchListIntrouvableException::new);
		this.watchListDao.deleteById(id);
	}
}
