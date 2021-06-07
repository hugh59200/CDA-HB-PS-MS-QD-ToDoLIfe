package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.dto.routine.MatinDto;
import com.cda.todolife.dto.routine.SoirDto;
import com.cda.todolife.exception.UtilisateurInconnuException;
import com.cda.todolife.model.Utilisateur;
import com.cda.todolife.model.routine.Matin;
import com.cda.todolife.model.routine.Soir;
import com.cda.todolife.repository.IRoutineMatinRepository;
import com.cda.todolife.repository.IRoutineSoirRepository;
import com.cda.todolife.repository.IUtilisateurRepository;
import com.cda.todolife.service.IRoutineService;

@Service
public class RoutineServiceImpl implements IRoutineService {

	@Autowired
	private IRoutineMatinRepository routineMatinService;

	@Autowired
	private IRoutineSoirRepository routineSoirService;

	@Autowired
	private IUtilisateurRepository utilisateurService;

	@Autowired
	private ModelMapper modelMapper;

	// get
	@Override
	public List<MatinDto> findMatinsByIdUtilisateur(int id) throws UtilisateurInconnuException {

		Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);
		List<MatinDto> matinList = new ArrayList<MatinDto>();
		if (userOpt.isPresent()) {
			this.routineMatinService.findAllByutilisateurIdUtilisateur(id)
					.forEach(res -> matinList.add(this.modelMapper.map(res, MatinDto.class)));
			return matinList;

		} else {
			throw new UtilisateurInconnuException();

		}

	}

	@Override
	public List<SoirDto> findSoirsByIdUtilisateur(int id) throws UtilisateurInconnuException {
		Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);
		List<SoirDto> soirList = new ArrayList<SoirDto>();
		if (userOpt.isPresent()) {
			this.routineSoirService.findAllByUtilisateurIdUtilisateur(id)
					.forEach(res -> soirList.add(this.modelMapper.map(res, SoirDto.class)));
			;
			return soirList;
		} else {
			throw new UtilisateurInconnuException();
		}
	}

	// post
	@Override
	public void addMatin(MatinDto matinDto, int id) throws UtilisateurInconnuException {

		Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);

		if (userOpt.isPresent()) {
			matinDto.setUtilisateurDtoList(this.modelMapper.map(userOpt.get(), UtilisateurDtoList.class));
			this.routineMatinService.save(this.modelMapper.map(matinDto, Matin.class));
		} else {
			throw new UtilisateurInconnuException();
		}

	}

	@Override
	public void addSoir(SoirDto soirDto, int id) throws UtilisateurInconnuException {

		Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);

		if (userOpt.isPresent()) {
			soirDto.setUtilisateurDtoList(this.modelMapper.map(userOpt.get(), UtilisateurDtoList.class));
			this.routineSoirService.save(this.modelMapper.map(soirDto, Soir.class));
		} else {
			throw new UtilisateurInconnuException();
		}

	}

	@Override
	public void modifMatin(MatinDto matinDto, int id) throws UtilisateurInconnuException {

		Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);
		if (userOpt.isPresent()) {
			matinDto.setUtilisateurDtoList(this.modelMapper.map(userOpt.get(), UtilisateurDtoList.class));
			this.routineMatinService.save(this.modelMapper.map(matinDto, Matin.class));
		} else {
			throw new UtilisateurInconnuException();
		}

	}

	@Override
	public void modifSoir(SoirDto soirDto, int id) throws UtilisateurInconnuException {
		Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);
		if (userOpt.isPresent()) {
			soirDto.setUtilisateurDtoList(this.modelMapper.map(userOpt.get(), UtilisateurDtoList.class));
			this.routineSoirService.save(this.modelMapper.map(soirDto, Soir.class));
		} else {
			throw new UtilisateurInconnuException();
		}
	}

}
