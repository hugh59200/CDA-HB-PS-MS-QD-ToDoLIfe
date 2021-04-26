package com.cda.todolife.serviceImpl;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.CurrentUserDto;
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

	@Override
	public CurrentUserDto findByUsername(String username) throws ResourceNotFoundException {
		Optional<Utilisateur> optUser = this.utilisateurRepository.findByUsername(username);
		if (optUser.isPresent()) {
			return this.modelMapper.map(optUser.get(), CurrentUserDto.class);
		} else {
			throw new ResourceNotFoundException();
		}
	}

	@Override
	public CurrentUserDto findById(int id) throws ResourceNotFoundException {
		Optional<Utilisateur> optUser = this.utilisateurRepository.findById(id);
		if (optUser.isPresent()) {
			return this.modelMapper.map(optUser.get(), CurrentUserDto.class);
		} else {
			throw new ResourceNotFoundException();
		}
	}

	@Override
	public boolean verify(String dateNaissance, String mail, String nom, String prenom, String pass, String username)
			throws ResourceAlreadyExist {

		byte[] decodedMailbytes = Base64.getDecoder().decode(mail);
		String decodedMail = new String(decodedMailbytes);

		byte[] decodedPassbytes = Base64.getDecoder().decode(pass);
		String decodedPass = new String(decodedPassbytes);

		Optional<Utilisateur> clrOpt = this.utilisateurRepository.findByUsername(username);
		Optional<Utilisateur> clrOpt2 = this.utilisateurRepository.findByEmail(decodedMail);

		if (clrOpt.isPresent()) {
			throw new ResourceAlreadyExist();
		} else if (clrOpt2.isPresent()) {
			throw new ResourceAlreadyExist();
		} else {
			
			System.out.println(dateNaissance);
			
//			DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
//			DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yyy", Locale.ENGLISH);
//			LocalDate date = LocalDate.parse(dateNaissance, inputFormatter);
//			String formattedDate = outputFormatter.format(date);
//			System.out.println(formattedDate); 
			
//			String date =  extractDate(dateNaissance);
			
//			System.out.println(date);
			
			
			
			
//			LocalDateTime dateTime = LocalDateTime.parse(dateNaissance);
//			
////			System.out.println(dateTime);
			
//			System.out.println((Date) dateNaissance);
			
			
//			Calendar cal = Calendar.getInstance();
//			SimpleDateFormat dateOnly = new SimpleDateFormat("MM/dd/yyyy");
//			System.out.println(dateOnly.format(cal.getTime()));

			UtilisateurDto user = UtilisateurDto.builder().email(decodedMail).nom(nom).prenom(prenom)
					.password(decodedPass).username(username).build();

			this.utilisateurRepository.save(this.modelMapper.map(user, Utilisateur.class));
			return true;
		}
	}
	
	
	
//	private static String extractDate(String dateNaissance) {
//		
//		System.out.println(dateNaissance);
//		
//		int dayInitial = Integer.parseInt(dateNaissance.substring(8, 10));
//		String dateInitial = dateNaissance.substring(0, 8);
//		dayInitial++;
//		
//		String newDay;
//		if (dayInitial < 10) {
//			 newDay = "0"+dayInitial;
//		} else {
//			newDay = ""+dayInitial;
//		}
//		
//		
//		String res = dateInitial+newDay;
//		
//		System.out.println(res);
//		return res;
//	}
//	
//	
//	public static void main(String[] args) {
//		extractDate("2021-04-04T22:00:00.000Z");
//	}

}
