package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.exception.JourExistantException;
import com.cda.todolife.exception.JourIntrouvableException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.model.Jour;
import com.cda.todolife.model.Journal;
import com.cda.todolife.repository.IJourRepository;
import com.cda.todolife.repository.IJournalRepository;
import com.cda.todolife.service.IJourService;

@Service
public class JourServiceImpl implements IJourService {

	@Autowired
	private IJourRepository jourRepository;

	@Autowired
	private IJournalRepository journalRepository;

	@Autowired
	private ModelMapper modelMapper;

	// test par savoir si un jour a été créér aujourd'hui
	@Override
	public boolean findByJournalUtilisateurIdUtilisateurAndDateJour(int idUtilisateur, String dateJour) {
		return this.jourRepository.findByJournalUtilisateurIdUtilisateurAndDateJour(idUtilisateur, dateJour).isPresent()
				? true
				: false;
	}

//	ajouter
	@Override
	public void add(int idUser, JourDto jourDto) throws JournalIntrouvableException, JourExistantException {
		Journal journalEnt = this.journalRepository.findByUtilisateurIdUtilisateur(idUser)
				.orElseThrow(JournalIntrouvableException::new);
		if (this.jourRepository.findByDateJourAndJournal(jourDto.getDateJour(), journalEnt).isPresent()) {
			throw new JourExistantException();
		}
		Jour jourEnt = this.modelMapper.map(jourDto, Jour.class);
		jourEnt.setJournal(journalEnt);
		jourDto.setIdJour(jourEnt.getIdJour());
		jourEnt = jourRepository.save(jourEnt);
	}

	// mettre à jour
	@Override
	public void update(JourDto jourDto, int idUser)
			throws JourIntrouvableException, JournalIntrouvableException, ResourceNotFoundException {

		Journal journal = this.journalRepository.findByUtilisateurIdUtilisateur(idUser)
				.orElseThrow(JournalIntrouvableException::new);
		Jour jourEnt = this.jourRepository.findByDateJourAndJournal(jourDto.getDateJour(), journal)
				.orElseThrow(JourIntrouvableException::new);
		;

		jourEnt.setTitre(jourDto.getTitre());
		jourEnt.setHumeur(jourDto.getHumeur());
		jourEnt.setTexte(jourDto.getTexte());

		this.jourRepository.save(this.modelMapper.map(jourEnt, Jour.class));
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
		return this.modelMapper.map(this.jourRepository.findById(id).orElseThrow(JourIntrouvableException::new),
				JourDto.class);

	}

//	trouver par titre
	@Override
	public JourDto findByTitre(String titre) throws JourIntrouvableException {
		return this.modelMapper.map(this.jourRepository.findByTitre(titre).orElseThrow(JourIntrouvableException::new),
				JourDto.class);
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