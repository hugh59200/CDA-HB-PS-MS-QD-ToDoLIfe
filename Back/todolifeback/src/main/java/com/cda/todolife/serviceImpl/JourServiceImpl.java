package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JourExistantException;
import com.cda.todolife.exception.JourIntrouvableException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.model.Jour;
import com.cda.todolife.model.Journal;
import com.cda.todolife.repository.IJourRepository;
import com.cda.todolife.repository.IJournalRepository;
import com.cda.todolife.service.IJourService;
import com.cda.todolife.service.IUtilisateurService;

@Service
public class JourServiceImpl implements IJourService {

	@Autowired
	private IJourRepository jourRepository;

	@Autowired
	private IJournalRepository journalRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private IUtilisateurService utilisateurService;

//	ajouter
	@Override
	public void add(int idUser, JourDto jourDto)
			throws JourExistantException, JournalIntrouvableException, ResourceNotFoundException {

		JournalDto journalDto = this.modelMapper.map(this.journalRepository.findByUtilisateurIdUtilisateur(idUser),
				JournalDto.class);

		if (journalDto.getUtilisateurDto() == null) {
			journalDto.setUtilisateurDto(this.utilisateurService.findByidUtilisateur(idUser));
			
		} else if (jourDto.getJournalDto() == null) {
			jourDto.setJournalDto(journalDto);
			
		} else if (journalDto.getListJourDto() == null) {
			List<JourDto> listJourDto = new ArrayList<>();
			listJourDto.add(jourDto);
			journalDto.setListJourDto(listJourDto);
		}

		Jour jour = this.modelMapper.map(jourDto, Jour.class);
		Journal journal = this.modelMapper.map(journalDto, Journal.class);
		
		jour.setJournal(journal);
		jour.setIdJour(this.jourRepository.findAll().size()+1);
		
		this.jourRepository.save(jour);
	}

//	lister
	@Override
	public List<JourDto> findAll() {
		List<JourDto> res = new ArrayList<>();
		this.jourRepository.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, JourDto.class)));
		return res;
	}

// trouver par id
	@Override
	public JourDto findById(int id) throws JourIntrouvableException {
		return this.modelMapper.map(this.jourRepository.findById(id).get(), JourDto.class);

	}

//	trouver par titre
	@Override
	public JourDto findByTitre(String titre) {
		return this.modelMapper.map(this.jourRepository.findByTitre(titre), JourDto.class);
	}

	// mettre à jour
	@Override
	public void update(JourDto list) throws JourIntrouvableException, JourExistantException {
		try {
			this.jourRepository.findById(list.getIdJour()).orElseThrow(JourIntrouvableException::new);
			this.jourRepository.save(this.modelMapper.map(list, Jour.class));
		} catch (JourIntrouvableException e) {
			e.printStackTrace();
		}
	}

	// supprimer
	@Override
	public void deleteById(int id) throws JourIntrouvableException {
		this.jourRepository.findById(id).orElseThrow(JourIntrouvableException::new);
		this.jourRepository.deleteById(id);
	}

//	lister jour par idUtilisateur
	@Override
	public List<JourDto> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur) {
		List<JourDto> listJours = new ArrayList<>();
		this.jourRepository.findAllByJournalUtilisateurIdUtilisateur(idUtilisateur)
				.forEach(pres -> listJours.add(this.modelMapper.map(pres, JourDto.class)));
		return listJours;
	}

}