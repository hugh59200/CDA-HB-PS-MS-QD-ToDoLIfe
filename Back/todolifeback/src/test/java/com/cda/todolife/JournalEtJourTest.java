package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

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

		int nbUserBefore = this.IUtilisateurService.list().size();
		int nbJourBefore = this.jourService.findAll().size();
		int nbJournalBefore = this.journalService.findAll().size();

		// creation d'un utilisateur
		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
				.prenom("hugo").password("12345").username("hugh59").dateNaissance(new java.sql.Date(1988 - 10 - 10))
				.build();
		this.IUtilisateurService.create(utilisateurDto);

		// creation d'un jour
		JourDto jourDto = JourDto.builder().dateJour(new java.sql.Date(1989 - 10 - 10)).titre("mon titre").humeur(4)
				.texte("blablabla").build();

		// creation d'un journal
		JournalDto journalDto = JournalDto.builder().build();
		utilisateurDto.setIdUtilisateur(this.IUtilisateurService.findByUsername("hugh59").getIdUtilisateur());
		journalDto.setUtilisateurDto(utilisateurDto);
		List<JourDto> listJour = new ArrayList<JourDto>();
		listJour.add(jourDto);
		journalDto.setListJourDto(listJour);
		this.journalService.add(journalDto.getUtilisateurDto().getIdUtilisateur());
		this.jourService.add(utilisateurDto.getIdUtilisateur(), jourDto);

		int nbUserAfter = this.IUtilisateurService.list().size();
		int nbJournalAfter = this.journalService.findAll().size();
		int nbJourAfter = this.jourService.findAll().size();

		// tests
		assertEquals(nbUserBefore + 1, nbUserAfter);
		assertEquals(nbJourBefore + 1, nbJournalAfter);
		assertEquals(nbJournalBefore + 1, nbJourAfter);
	}

	@Order(2)
	@Test
	public void lire() throws JournalIntrouvableException, JourIntrouvableException, ResourceNotFoundException {

		// utilisateur
		List<UtilisateurDto> listUtilisateur = this.IUtilisateurService.list();
		assertNotNull(listUtilisateur);
		for (UtilisateurDto utilisateurDto : listUtilisateur) {
			assertNotNull(this.IUtilisateurService.findByUsername(utilisateurDto.getUsername()));
			assertNotNull(this.IUtilisateurService.findByidUtilisateur(utilisateurDto.getIdUtilisateur()));
		}

		// journal
		List<JournalDto> listJournal = this.journalService.findAll();
		assertNotNull(listJournal);
		for (JournalDto journalDto : listJournal) {
			assertNotNull(this.journalService.findById(journalDto.getIdJournal()));
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

	@Order(3)
	@Test
	public void update() {
		// utilisateur

		// jour

		// journal
	}

	@Order(5)
	@Test
	public void doublonExecption() {

		// utilisateur
		Assertions.assertThrows(ResourceAlreadyExist.class, () -> {
			this.IUtilisateurService.create(UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
					.prenom("hugo").password("12345").username("hugh59")
					.dateNaissance(new java.sql.Date(1988 - 10 - 10)).build());
		});

		// jour
		Assertions.assertThrows(JourExistantException.class, () -> {
			this.jourService.add(this.IUtilisateurService.findByUsername("hugh59").getIdUtilisateur(),
					this.jourService.findByTitre("mon titre"));
		});
	}

	@Order(6)
	@Test
	public void introuvableExecption() {

		// utilisateur
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			this.IUtilisateurService.findByUsername("paul59");
		});
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			this.IUtilisateurService.findByidUtilisateur(20);
		});
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			this.IUtilisateurService.delete(20);
		});
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			this.IUtilisateurService.show(20);
		});
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			this.IUtilisateurService.update(this.IUtilisateurService.findByidUtilisateur(20));
		});

		// jour
		Assertions.assertThrows(JourIntrouvableException.class, () -> {
			this.jourService.findByTitre("mon faux titre");
		});
		Assertions.assertThrows(JourIntrouvableException.class, () -> {
			this.jourService.findById(20);
		});
		Assertions.assertThrows(JourIntrouvableException.class, () -> {
			this.jourService.deleteById(20);
		});
		Assertions.assertThrows(JourIntrouvableException.class, () -> {
			this.jourService.update(this.jourService.findById(20), 20);
		});
		Assertions.assertThrows(JourIntrouvableException.class, () -> {
			this.journalService.add(this.jourService.findByTitre("mon faux titre").getJournalDto().getUtilisateurDto()
					.getIdUtilisateur());
		});

		// journal
		Assertions.assertThrows(JournalIntrouvableException.class, () -> {
			this.journalService.findById(1);
		});
		Assertions.assertThrows(JournalIntrouvableException.class, () -> {
			this.journalService.deleteById(20);
		});
		Assertions.assertThrows(JournalIntrouvableException.class, () -> {
			this.journalService.update(this.journalService.findById(1));
		});
	}

	@Order(7)
	@Test
	public void journalExisteBoolean() throws JournalIntrouvableException {
		assertFalse(this.journalService.findIfJournalExist(20));
//		assertTrue(this.journalService.findIfJournalExist(this.journalService.findAll().get(0).getIdJournal()));
	}

	@Order(8)
	@Test
	public void suprrimer() throws JourIntrouvableException, JournalIntrouvableException, JournalExistantException,
			ResourceNotFoundException {
		// jour
		int nbJourAvant = this.jourService.findAll().size();
		int idJour = this.jourService.findByTitre("mon titre").getIdJour();
		this.jourService.deleteById(idJour);
		int nbJourApres = this.jourService.findAll().size();
		assertEquals(nbJourApres + 1, nbJourAvant);

		// journal
		int nbJournalAvant = this.journalService.findAll().size();
		int idJournal = this.journalService.findAll().get(0).getIdJournal();
		this.journalService.deleteById(idJournal);
		int nbJournalApres = this.jourService.findAll().size();
		assertEquals(nbJournalApres + 1, nbJournalAvant);

		// utilisateur
		int nbUserAvant = this.IUtilisateurService.list().size();
		int idUser = this.IUtilisateurService.findByUsername("hugh59").getIdUtilisateur();
		this.IUtilisateurService.delete(idUser);
		int nbUserAprés = this.IUtilisateurService.list().size();
		assertEquals(nbUserAprés + 1, nbUserAvant);
	}

	@Order(9)
	@Test
	static void reset(@Autowired IJourRepository jourRepository, @Autowired IJournalRepository journalRepository,
			@Autowired IUtilisateurRepository utilisateurRepository) {
		utilisateurRepository.deleteAll();
		journalRepository.deleteAll();
		jourRepository.deleteAll();
	}
}
