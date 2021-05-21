package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

	@Override
	public boolean findByJournalUtilisateurIdUtilisateurAndDateJour(int idUtilisateur, String dateJour) {
		return this.jourRepository.findByJournalUtilisateurIdUtilisateurAndDateJour(idUtilisateur, dateJour).isPresent()
				? true
				: false;
	}

	@Override
	public void add(int idUser, JourDto jourDto) throws JournalIntrouvableException, JourExistantException {

		Journal journal = this.journalRepository.findByUtilisateurIdUtilisateur(idUser)
				.orElseThrow(JournalIntrouvableException::new);

		Optional<Jour> jourEntList = this.jourRepository.findByDateJourAndJournal(jourDto.getDateJour(), journal);

		if (jourEntList.isPresent()) {
			throw new JourExistantException();
		}
		
		Jour jourEnt = this.modelMapper.map(jourDto, Jour.class);
		jourEnt.setJournal(journal);
		jourDto.setIdJour(jourEnt.getIdJour());
		this.jourRepository.save(jourEnt);
	}

	@Override
	public void update(JourDto jourDto, int idUser)
			throws JourIntrouvableException, JournalIntrouvableException, ResourceNotFoundException {

		Jour jourEnt = this.jourRepository
				.findByDateJourAndJournal(jourDto.getDateJour(),
						this.journalRepository.findByUtilisateurIdUtilisateur(idUser)
								.orElseThrow(JournalIntrouvableException::new))
				.orElseThrow(JourIntrouvableException::new);

		jourEnt.setTitre(jourDto.getTitre());
		jourEnt.setHumeur(jourDto.getHumeur());
		jourEnt.setTexte(jourDto.getTexte());

		this.jourRepository.save(this.modelMapper.map(jourEnt, Jour.class));
	}

	@Override
	public List<JourDto> findAll() {
		List<JourDto> res = new ArrayList<>();
		this.jourRepository.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, JourDto.class)));
		return res;
	}

	@Override
	public JourDto findById(int id) throws JourIntrouvableException {
		return this.modelMapper.map(this.jourRepository.findById(id).orElseThrow(JourIntrouvableException::new),
				JourDto.class);
	}

	@Override
	public JourDto findByTitre(String titre) throws JourIntrouvableException {
		return this.modelMapper.map(this.jourRepository.findByTitre(titre).orElseThrow(JourIntrouvableException::new),
				JourDto.class);
	}

	@Override
	public void deleteById(int id) throws JourIntrouvableException {
		this.jourRepository.findById(id).orElseThrow(JourIntrouvableException::new);
		this.jourRepository.deleteById(id);
	}

	@Override
	public List<JourDto> findAllByJournalUtilisateurIdUtilisateur(int idUtilisateur) {
		List<JourDto> listJours = new ArrayList<>();
		this.jourRepository.findAllByJournalUtilisateurIdUtilisateur(idUtilisateur)
				.forEach(pres -> listJours.add(this.modelMapper.map(pres, JourDto.class)));
		return listJours;
	}

	@Override
	public List<JourDto> findAllByJournalUtilisateurIdUtilisateurAndDate(int idUtilisateur, int mois, int annee) {
		List<JourDto> listJours = new ArrayList<>();
		this.jourRepository.findAllByJournalUtilisateurIdUtilisateurAndDate(idUtilisateur, mois, annee)
				.forEach(pres -> listJours.add(this.modelMapper.map(pres, JourDto.class)));
		return listJours;
	}

}