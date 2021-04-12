package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.exception.ResourceAlreadyExist;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.model.Utilisateur;
import com.cda.todolife.repository.IUtilisateurRepository;
import com.cda.todolife.service.IUtilisateurService;

@Service
public class UtilisateurServiceImpl implements IUtilisateurService {

	@Autowired
	private IUtilisateurRepository utilisateurRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<UtilisateurDtoList> list() {

		List<UtilisateurDtoList> result = new ArrayList<UtilisateurDtoList>();
		this.utilisateurRepository.findAll()
				.forEach(utilisateur -> result.add(this.modelMapper.map(utilisateur, UtilisateurDtoList.class)));

		return result;
	}

	@Override
	public void create(UtilisateurDto userDto) throws ResourceAlreadyExist {
		Optional<Utilisateur> clrOpt = this.utilisateurRepository.findByUsername(userDto.getUsername());
		Optional<Utilisateur> clrOpt2 = this.utilisateurRepository.findByEmail(userDto.getEmail());
		if (clrOpt.isPresent()) {
			throw new ResourceAlreadyExist();
		} else if (clrOpt2.isPresent()) {
			throw new ResourceAlreadyExist();
		} else {
			this.utilisateurRepository.save(this.modelMapper.map(userDto, Utilisateur.class));
		}

	}

	@Override
	public UtilisateurDto show(int id) throws ResourceNotFoundException {
		Optional<Utilisateur> clrOpt = this.utilisateurRepository.findById(id);
		if (clrOpt.isPresent()) {
			return this.modelMapper.map(clrOpt.get(), UtilisateurDto.class);
		} else {
			throw new ResourceNotFoundException();
		}
	}

	@Override
	public void update(UtilisateurDto userDto) throws ResourceAlreadyExist {
		Optional<Utilisateur> clrOpt = this.utilisateurRepository.findById(userDto.getIdUtilisateur());
		if (clrOpt.isPresent()) {
			Utilisateur utilisateur1 = clrOpt.get();
			Utilisateur utilisateur2 = this.utilisateurRepository.findByUsername(userDto.getUsername()).orElse(null);

			if (utilisateur2 != null && utilisateur2.getIdUtilisateur() != utilisateur1.getIdUtilisateur()) {
				throw new ResourceAlreadyExist();
			}
			if (utilisateur2 != null && utilisateur2.getUsername() != utilisateur1.getUsername()) {
				throw new ResourceAlreadyExist();
			}
			if (utilisateur2 != null && utilisateur2.getEmail() != utilisateur1.getEmail()) {
				throw new ResourceAlreadyExist();
			} else {
				this.utilisateurRepository.save(this.modelMapper.map(userDto, Utilisateur.class));
			}
		}
	}

	@Override
	public void delete(int id) throws ResourceNotFoundException {
		Optional<Utilisateur> clrOpt = this.utilisateurRepository.findById(id);
		if (clrOpt.isPresent()) {
			this.utilisateurRepository.deleteById(id);
		} else {
			throw new ResourceNotFoundException();
		}
	}

}
