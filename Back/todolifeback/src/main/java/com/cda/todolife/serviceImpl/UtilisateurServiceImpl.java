package com.cda.todolife.serviceImpl;

import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
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
	private JavaMailSender mailSender;

	@Autowired
	private IUtilisateurRepository utilisateurRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public void register(UtilisateurDto user, String siteURL)
			throws UnsupportedEncodingException, MessagingException, ResourceAlreadyExist {
		sendVerificationEmail(user, siteURL);
	}

	@Override
	public void sendVerificationEmail(UtilisateurDto userDto, String siteURL)
			throws MessagingException, UnsupportedEncodingException {
		String toAddress = userDto.getEmail();
		String fromAddress = "todolifecda@gmail.com";
		String senderName = "ToDoLife";
		String subject = "Veuillez vérifier votre inscription";
		String content = "Bonjour [[name]],<br>" + "Cliquez sur le lien ci-dessous pour vérifier votre compte :<br>"
				+ "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFIER</a></h3>" + "Merci,<br>" + "ToDoLife.";
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		helper.setFrom(fromAddress, senderName);
		helper.setTo(toAddress);
		helper.setSubject(subject);
		String email = userDto.getEmail();
		String emailEncode = Base64.getEncoder().encodeToString(email.getBytes());
		String password = userDto.getPassword();
		String passwordEncode = Base64.getEncoder().encodeToString(password.getBytes());
//		System.out.println(userDto.getDateNaissanceStr());
		content = content.replace("[[name]]", userDto.getPrenom() + " " + userDto.getNom());
		String verifyURL = siteURL + "/verify?dn=" + userDto.getDateNaissance() + "&em=" + emailEncode + "&n="
				+ userDto.getNom() + "&pn=" + userDto.getPrenom() + "&psw=" + passwordEncode + "&un="
				+ userDto.getUsername();
		content = content.replace("[[URL]]", verifyURL);
		helper.setText(content, true);
		mailSender.send(message);
	}

	@Override
	public List<UtilisateurDto> list() {
		List<UtilisateurDto> result = new ArrayList<UtilisateurDto>();
		this.utilisateurRepository.findAll()
				.forEach(utilisateur -> result.add(this.modelMapper.map(utilisateur, UtilisateurDto.class)));

		return result;
	}

	@Override
	public void create(UtilisateurDto userDto) throws ResourceAlreadyExist {
		if (this.utilisateurRepository.findByUsername(userDto.getUsername()).isPresent()
				|| this.utilisateurRepository.findByEmail(userDto.getEmail()).isPresent()) {
			throw new ResourceAlreadyExist();
		} else {
			this.utilisateurRepository.save(this.modelMapper.map(userDto, Utilisateur.class));
		}

	}

	@Override
	public UtilisateurDtoList show(int id) throws ResourceNotFoundException {
		return this.modelMapper.map(this.utilisateurRepository.findById(id).orElseThrow(ResourceNotFoundException::new),
				UtilisateurDtoList.class);
	}

	@Override
	public void update(UtilisateurDto userDto) throws ResourceAlreadyExist {
		Utilisateur utilisateur1 = this.utilisateurRepository.findById(userDto.getIdUtilisateur())
				.orElseThrow(ResourceAlreadyExist::new);
		Utilisateur utilisateur2 = this.utilisateurRepository.findByUsername(userDto.getUsername()).orElse(null);

		if (utilisateur2 != null && utilisateur2.getIdUtilisateur() != utilisateur1.getIdUtilisateur()
				|| utilisateur2.getUsername() != utilisateur1.getUsername()
				|| utilisateur2.getEmail() != utilisateur1.getEmail()) {
			throw new ResourceAlreadyExist();
		} else {
			this.utilisateurRepository.save(this.modelMapper.map(userDto, Utilisateur.class));
		}
	}

	@Override
	public void delete(int id) throws ResourceNotFoundException {
		this.utilisateurRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
		this.utilisateurRepository.deleteById(id);
	}

	@Override
	public UtilisateurDto findByUsername(String username) throws ResourceNotFoundException {
		return this.modelMapper.map(
				this.utilisateurRepository.findByUsername(username).orElseThrow(ResourceNotFoundException::new),
				UtilisateurDto.class);
	}

	@Override
	public UtilisateurDto findByidUtilisateur(int id) throws ResourceNotFoundException {
		return this.modelMapper.map(this.utilisateurRepository.findById(id).orElseThrow(ResourceNotFoundException::new),
				UtilisateurDto.class);
	}

	@Override
	public boolean verify(String dateNaissance, String mail, String nom, String prenom, String pass, String username)
			throws ResourceAlreadyExist {

		String decodedMail = new String(Base64.getDecoder().decode(mail));

		if (this.utilisateurRepository.findByUsername(username).isPresent()
				|| this.utilisateurRepository.findByEmail(decodedMail).isPresent()) {
			throw new ResourceAlreadyExist();
		} else {
			this.utilisateurRepository.save(this.modelMapper.map(UtilisateurDto.builder().email(decodedMail).nom(nom)
					.prenom(prenom).password(new String(Base64.getDecoder().decode(pass))).username(username)
					.dateNaissance(Date.valueOf(dateNaissance)).build(), Utilisateur.class));
			return true;
		}
	}
}
