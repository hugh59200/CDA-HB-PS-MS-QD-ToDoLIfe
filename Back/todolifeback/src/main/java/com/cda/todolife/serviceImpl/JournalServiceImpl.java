package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.model.Journal;
import com.cda.todolife.repository.IJournalRepository;
import com.cda.todolife.repository.IUtilisateurRepository;
import com.cda.todolife.service.IJournalService;

@Service
public class JournalServiceImpl implements IJournalService {

	@Autowired
	private IJournalRepository journalRepository;

	@Autowired
	private IUtilisateurRepository userRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public void add(int idUser) throws JournalExistantException, ResourceNotFoundException {
		if (this.journalRepository.findByUtilisateurIdUtilisateur(idUser).isPresent()) {
			throw new JournalExistantException();
		} else {
			Journal journal = new Journal();
			journal.setUtilisateur(this.userRepository.findById(idUser).orElseThrow(ResourceNotFoundException::new));
			this.journalRepository.save(this.modelMapper.map(journal, Journal.class));
		}

	}

	@Override
	public List<JournalDto> findAll() {
		List<JournalDto> res = new ArrayList<>();
		this.journalRepository.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, JournalDto.class)));
		return res;
	}

	@Override
	public JournalDto findById(int id) throws JournalIntrouvableException {
		return this.modelMapper.map(this.journalRepository.findById(id).orElseThrow(JournalIntrouvableException::new),
				JournalDto.class);
	}

	@Override
	public void update(JournalDto list) throws JournalIntrouvableException {
		this.journalRepository.findById(list.getIdJournal()).orElseThrow(JournalIntrouvableException::new);
		this.journalRepository.save(this.modelMapper.map(list, Journal.class));
	}

	@Override
	public void deleteById(int id) throws JournalIntrouvableException {
		this.journalRepository.findById(id).orElseThrow(JournalIntrouvableException::new);
		this.journalRepository.deleteById(id);
	}

	@Override
	public JournalDto findByUtilisateurUsername(String username) throws JournalIntrouvableException {
		return this.modelMapper.map(this.journalRepository.findByUtilisateurUsername(username)
				.orElseThrow(JournalIntrouvableException::new), JournalDto.class);
	}

}