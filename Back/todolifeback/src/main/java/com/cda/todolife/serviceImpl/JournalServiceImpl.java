package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.model.Journal;
import com.cda.todolife.repository.IJournalRepository;
import com.cda.todolife.service.IJournalService;

@Service
public class JournalServiceImpl implements IJournalService {

	@Autowired
	private IJournalRepository journalRepository;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter
	@Override
	public void add(JournalDto list) throws JournalExistantException {
		Optional<Journal> probEntOpt = this.journalRepository.findById(list.getIdJournal());
		if (probEntOpt.isPresent()) {
			throw new JournalExistantException();
		} else {
			this.journalRepository.save(this.modelMapper.map(list, Journal.class));
		}
	}

//	lister
	@Override
	public List<JournalDto> findAll() {
		List<JournalDto> res = new ArrayList<>();
		this.journalRepository.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, JournalDto.class)));
		return res;
	}

// trouver par id
	@Override
	public JournalDto findById(int id) throws JournalIntrouvableException {
		return this.modelMapper.map(this.journalRepository.findById(id).get(), JournalDto.class);

	}

//	trouver par label
	@Override
	public JournalDto findByLabel(String label) throws JournalIntrouvableException {
		return this.modelMapper.map(this.journalRepository.findByLabel(label), JournalDto.class);
	}

	// mettre à jour
	@Override
	public void update(JournalDto list) throws JournalIntrouvableException, JournalExistantException {
		try {
			this.journalRepository.findById(list.getIdJournal()).orElseThrow(JournalIntrouvableException::new);
			this.journalRepository.save(this.modelMapper.map(list, Journal.class));
		} catch (JournalIntrouvableException e) {
			e.printStackTrace();
		}
	}

	// supprimer
	@Override
	public void deleteById(int id) throws JournalIntrouvableException {
		this.journalRepository.findById(id).orElseThrow(JournalIntrouvableException::new);
		this.journalRepository.deleteById(id);
	}

	// lister jours via userId
//	@Override
//	public List<JourDto> findAllByJournalIdJournal(int id) throws ResourceNotFoundException {
//		Journal journal = this.journalRepository.findByUtilisateurIdUtilisateur(id);
//		int idJournal = journal.getIdJournal();
//		System.out.println(this.jourRepository.findAllByJournalIdJournal(idJournal));

//	List<JourDto> res = new ArrayList<>();this.jourRepository.findAll().forEach(pres->res.add(this.modelMapper.map(pres,JourDto.class)));return res;
//}

}