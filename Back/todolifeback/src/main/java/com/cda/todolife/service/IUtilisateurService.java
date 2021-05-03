package com.cda.todolife.service;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.mail.MessagingException;

import com.cda.todolife.dto.CurrentUserDto;
import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.exception.ResourceAlreadyExist;
import com.cda.todolife.exception.ResourceNotFoundException;

public interface IUtilisateurService {

	List<UtilisateurDtoList> list();

	void create(UtilisateurDto userDto) throws ResourceAlreadyExist;

	UtilisateurDtoList show(int id) throws ResourceNotFoundException;

	void update(UtilisateurDto userDto) throws ResourceAlreadyExist;

	void delete(int id) throws ResourceNotFoundException;

	CurrentUserDto findByUsername(String name) throws ResourceNotFoundException;
	
	UtilisateurDto findByidUtilisateur(int id) throws ResourceNotFoundException ;

	void register(UtilisateurDto user, String siteURL)
			throws UnsupportedEncodingException, MessagingException, ResourceAlreadyExist;

	public void sendVerificationEmail(UtilisateurDto userDto, String siteURL)
			throws MessagingException, UnsupportedEncodingException;

	boolean verify(String dateNaissance, String mail, String nom, String prenom, String pass, String username)
			throws ResourceAlreadyExist;

}
