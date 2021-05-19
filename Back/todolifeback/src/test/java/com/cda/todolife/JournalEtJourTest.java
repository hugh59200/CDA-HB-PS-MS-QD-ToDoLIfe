package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cda.todolife.dto.JourDto;
import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.dto.UtilisateurDtoList;
import com.cda.todolife.exception.JourExistantException;
import com.cda.todolife.exception.JourIntrouvableException;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceAlreadyExist;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.repository.IJourRepository;
import com.cda.todolife.repository.IJournalRepository;
import com.cda.todolife.repository.IUtilisateurRepository;
import com.cda.todolife.service.IJourService;
import com.cda.todolife.service.IJournalService;
import com.cda.todolife.service.IUtilisateurService;

@TestInstance(Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class JournalEtJourTest {

	private static int i;

	@Autowired
	IJourService jourService;

	@Autowired
	IJournalService journalService;

	@Autowired
	IUtilisateurService IUtilisateurService;

	@BeforeAll
	static void vider(@Autowired IJourRepository jourRepository, @Autowired IJournalRepository journalRepository,
			@Autowired IUtilisateurRepository utilisateurRepository) {
		jourRepository.deleteAll();
		journalRepository.deleteAll();
		utilisateurRepository.deleteAll();
	}

	@BeforeEach
	public void count() {
		i++;
		System.err.println("Test n°" + i);
	}

	@Order(0)
	@Test
	public void vide() {
		assertEquals(0, this.jourService.findAll().size());
		assertEquals(0, this.journalService.findAll().size());
		assertEquals(0, this.IUtilisateurService.list().size());
	}

	@Order(1)
	@Test
	public void creation() throws JournalExistantException, ResourceNotFoundException, JourExistantException,
			JournalIntrouvableException, ResourceAlreadyExist {

		// creation d'un utilisateur
		int nbUser = this.jourService.findAll().size();
		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
				.prenom("hugo").password("12345").username("hugh59").dateNaissance(new java.sql.Date(1988 - 10 - 10))
				.build();
		this.IUtilisateurService.create(utilisateurDto);
		assertEquals(nbUser + 1, this.IUtilisateurService.list().size());

		// creation d'un jour
		int vSizeJour = this.jourService.findAll().size();
		JourDto jourDto = JourDto.builder().dateJour("2021-05-17").titre("mon titre").humeur(4).texte("blablabla")
				.build();

		// creation d'un journal
		int vSizeJournal = this.journalService.findAll().size();
		JournalDto journalDto = JournalDto.builder().build();
		utilisateurDto.setIdUtilisateur(this.IUtilisateurService.findByUsername("hugh59").getId());
		journalDto.setUtilisateurDto(utilisateurDto);
		List<JourDto> listJour = new ArrayList<JourDto>();
		listJour.add(jourDto);
		journalDto.setListJourDto(listJour);
		this.journalService.add(journalDto.getUtilisateurDto().getIdUtilisateur());
		assertEquals(vSizeJournal + 1, this.journalService.findAll().size());
		this.jourService.add(utilisateurDto.getIdUtilisateur(), jourDto);
		assertEquals(vSizeJour + 1, this.jourService.findAll().size());
	}

//	@Order(2)
//	@Test
//	public void lire() throws JournalExistantException, ResourceNotFoundException, JourExistantException,
//			JournalIntrouvableException, ResourceAlreadyExist {
//
//		// creation d'un utilisateur
//		int nbUser = this.jourService.findAll().size();
//		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
//				.prenom("hugo").password("12345").username("hugh59").dateNaissance(new java.sql.Date(1988 - 10 - 10))
//				.build();
//		this.IUtilisateurService.create(utilisateurDto);
//		assertEquals(nbUser + 1, this.IUtilisateurService.list().size());
//
//		// creation d'un jour
//		int vSizeJour = this.jourService.findAll().size();
//		JourDto jourDto = JourDto.builder().dateJour("2021-05-17").titre("mon titre").humeur(4).texte("blablabla")
//				.build();
//
//		// creation d'un journal
//		int vSizeJournal = this.journalService.findAll().size();
//		JournalDto journalDto = JournalDto.builder().build();
//		utilisateurDto.setIdUtilisateur(this.IUtilisateurService.findByUsername("hugh59").getId());
//		journalDto.setUtilisateurDto(utilisateurDto);
//		List<JourDto> listJour = new ArrayList<JourDto>();
//		listJour.add(jourDto);
//		journalDto.setListJourDto(listJour);
//		this.journalService.add(journalDto.getUtilisateurDto().getIdUtilisateur());
//		assertEquals(vSizeJournal + 1, this.journalService.findAll().size());
//		this.jourService.add(utilisateurDto.getIdUtilisateur(), jourDto);
//		assertEquals(vSizeJour + 1, this.jourService.findAll().size());
//	}

//	@Order(3)
//	@Test
//	public void update() {
//		// utilisateur
//
//		// jour
//
//		// journal
//	}

//	@Order(4)
//	@Test
//	public void suprrimer() throws JourIntrouvableException, JournalIntrouvableException, JournalExistantException,
//	ResourceNotFoundException {
//		// jour
//		int nbJourAvant = this.jourService.findAll().size();
//		int idJour = this.jourService.findByTitre("mon titre").getIdJour();
//		this.jourService.deleteById(idJour);
//		int nbJourApres = this.jourService.findAll().size();
//		assertEquals(nbJourApres + 1, nbJourAvant);
//		
//		// journal
//		int nbJournalAvant = this.journalService.findAll().size();
//		int idJournal = this.journalService.findAll().get(0).getIdJournal();
//		this.journalService.deleteById(idJournal);
//		int nbJournalApres = this.jourService.findAll().size();
//		assertEquals(nbJournalApres + 1, nbJournalAvant);
//		
//		// utilisateur
//		int nbUserAvant = this.IUtilisateurService.list().size();
//		int idUser = this.IUtilisateurService.findByUsername("hugh59").getId();
//		this.IUtilisateurService.delete(idUser);
//		System.out.println(idUser);
//		int nbUserAprés = this.IUtilisateurService.list().size();
//		assertEquals(nbUserAprés + 1, nbUserAvant);
//	}

	@Order(5)
	@Test
	public void find() throws JournalIntrouvableException, JourIntrouvableException, ResourceNotFoundException {

		// utilisateur
		List<UtilisateurDtoList> listUtilisateur = this.IUtilisateurService.list();
		assertNotNull(listUtilisateur);
		for (UtilisateurDtoList utilisateurDto : listUtilisateur) {
			assertNotNull(this.IUtilisateurService.findByUsername(utilisateurDto.getUsername()));
			assertNotNull(this.IUtilisateurService.findByidUtilisateur(utilisateurDto.getIdUtilisateur()));
		}

		// journal
		List<JournalDto> listJournal = this.journalService.findAll();
		assertNotNull(listJournal);
		for (JournalDto journalDto : listJournal) {
			assertNotNull(this.journalService.findById(journalDto.getIdJournal()));
			assertNotNull(this.journalService.findIfJournalExist(journalDto.getIdJournal()));
		}
		assertNotNull(this.journalService.findAll());

		// jour
		List<JourDto> listJour = this.jourService.findAll();
		assertNotNull(listJour);
		for (JourDto jourDto : listJour) {
			assertNotNull(this.jourService.findById(jourDto.getIdJour()));
			assertNotNull(this.jourService.findByTitre(jourDto.getTitre()));
			assertNotNull(this.jourService.findAll());
		}
	}

	@Order(6)
	@Test
	public void doublonExecption() {
		// utilisateur
		int vSize = this.IUtilisateurService.list().size();
		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
				.prenom("hugo").password("12345").username("hugh59").dateNaissance(new java.sql.Date(1988 - 10 - 10))
				.build();

		Assertions.assertThrows(ResourceAlreadyExist.class, () -> {
			this.IUtilisateurService.create(utilisateurDto);
		});
		assertEquals(vSize, this.journalService.findAll().size());

		// jour
		int vSizeJour = this.jourService.findAll().size();

		Assertions.assertThrows(JourExistantException.class, () -> {
			this.jourService.add(this.IUtilisateurService.findByUsername("hugh59").getId(),
					this.jourService.findByTitre("mon titre"));
		});
		assertEquals(vSizeJour, this.journalService.findAll().size());

		// journal
		int vSizejournal = this.journalService.findAll().size();
		int idUtilisateur;
		try {
			idUtilisateur = this.jourService.findByTitre("hugh59").getJournalDto().getUtilisateurDto()
					.getIdUtilisateur();
			Assertions.assertThrows(JournalExistantException.class, () -> {
				this.journalService.add(idUtilisateur);
			});
		} catch (JourIntrouvableException e) {
			e.printStackTrace();
		}
		assertEquals(vSizejournal, this.journalService.findAll().size());
	}

	@Order(6)
	@Test
	public void introuvableExecption() {

		// utilisateur
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			this.IUtilisateurService.findByUsername("paul59");
		});

		// jour
		Assertions.assertThrows(JourIntrouvableException.class, () -> {
			this.jourService.findByTitre("mon titre inexistant");
		});

		// journal
		Assertions.assertThrows(JournalIntrouvableException.class, () -> {
			this.journalService.findById(1);
		});
	}

	@Order(7)
	@Test
	static void reset(@Autowired IJourRepository jourRepository, @Autowired IJournalRepository journalRepository,
			@Autowired IUtilisateurRepository utilisateurRepository) {
		utilisateurRepository.deleteAll();
		journalRepository.deleteAll();
		jourRepository.deleteAll();
	}
}
