package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.ToDoListDto;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.exception.ToDoListExistanteException;
import com.cda.todolife.exception.ToDoListIntrouvableException;
import com.cda.todolife.model.ToDoList;
import com.cda.todolife.repository.IToDoListRepository;
import com.cda.todolife.service.IToDoListService;

@Service
public class ToDoListServiceImpl implements IToDoListService {

	@Autowired
	private IToDoListRepository todolistDao;

//	@Autowired
//	private IUtilisateurRepository utilisateurRepository;

	@Autowired
	private ModelMapper modelMapper;

//	ajouter une todolist
	@Override
	public void add(ToDoListDto list) throws ToDoListExistanteException {
//		Utilisateur utilisateur = utilisateurRepository.findById(id).get();
//		ToDoList list = ToDoList.builder().label(label).utilisateur(utilisateur).build();
		
		Optional<ToDoList> listOpt = this.todolistDao.findById(list.getIdTodoList());
		if (listOpt.isPresent()) {
			throw new ToDoListExistanteException();
		} else {
			
			this.todolistDao.save(this.modelMapper.map(list, ToDoList.class));
		}
	}

//	lister les todolist
	@Override
	public List<ToDoListDto> findAll() {
		List<ToDoListDto> res = new ArrayList<>();
		this.todolistDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, ToDoListDto.class)));
		return res;
	}

// trouver par id
	@Override
	public ToDoListDto findById(int id) throws ToDoListIntrouvableException {
		return this.modelMapper.map(this.todolistDao.findById(id).get(), ToDoListDto.class);

	}

////	trouver par label
//	@Override
//	public ToDoListDto findByLabel(String label) throws ToDoListIntrouvableException {
//		return this.modelMapper.map(this.todolistDao.findByLabel(label), ToDoListDto.class);
//	}

	// supprimer un film
	@Override
	public void deleteById(int id) throws ToDoListIntrouvableException {
		this.todolistDao.findById(id).orElseThrow(ToDoListIntrouvableException::new);
		this.todolistDao.deleteById(id);
	}

	@Override
	public List<ToDoListDto> findListByUserId(int id) throws ToDoListIntrouvableException, ResourceNotFoundException {
		List<ToDoListDto> res = new ArrayList<>();
		this.todolistDao.findListByUserId(id).forEach(pres -> res.add(this.modelMapper.map(pres, ToDoListDto.class)));
		return res;
	}

	@Override
	public void update(ToDoListDto list) throws ToDoListIntrouvableException, ToDoListExistanteException {
		
		System.out.println(list.getUtilisateur());
		try {
			this.todolistDao.findById(list.getIdTodoList()).orElseThrow(ToDoListIntrouvableException::new);
			todolistDao.save(this.modelMapper.map(list, ToDoList.class));
		} catch (ToDoListIntrouvableException e) {
			e.printStackTrace();
		}
	}

}