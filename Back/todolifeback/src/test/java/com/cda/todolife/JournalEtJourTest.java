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

	@Order(1)
	@Test
	public void vide() {
		assertEquals(0, this.jourService.findAll().size());
		assertEquals(0, this.journalService.findAll().size());
		assertEquals(0, this.IUtilisateurService.list().size());
	}

	@Order(2)
	@Test
	public void create() throws JournalExistantException, ResourceNotFoundException, JourExistantException,
			JournalIntrouvableException, ResourceAlreadyExist {

		// etape 1 -> creation d'un utilisateur
		int nbUser = this.jourService.findAll().size();
		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
				.prenom("hugo").password("12345").username("hugh59").dateNaissance(new java.sql.Date(1988 - 10 - 10))
				.build();
		this.IUtilisateurService.create(utilisateurDto);
		assertEquals(nbUser + 1, this.IUtilisateurService.list().size());

		// etape 2 -> creation d'un jour
		int vSizeJour = this.jourService.findAll().size();
		JourDto jourDto = JourDto.builder().dateJour("2021 - 05 - 17").titre("mon titre").humeur(4).texte("blablabla")
				.build();

		// etape 3 -> creation d'un journal
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

	@Order(3)
	@Test
	public void doublons() {
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

	@Order(4)
	@Test
	public void utilisateurfindBy() {

		List<UtilisateurDtoList> listUtilisateur = this.IUtilisateurService.list();

		for (UtilisateurDtoList utilisateurDto : listUtilisateur) {
			try {
				assertNotNull(this.IUtilisateurService.findByUsername(utilisateurDto.getUsername()));
				assertNotNull(this.IUtilisateurService.findByidUtilisateur(utilisateurDto.getIdUtilisateur()));
			} catch (ResourceNotFoundException e) {
				e.printStackTrace();
			}
		}
	}

	@Order(5)
	@Test
	public void journalfindBy() throws JournalIntrouvableException {
		List<JournalDto> listJournal = this.journalService.findAll();
		for (JournalDto journalDto : listJournal) {
			assertNotNull(this.journalService.findById(journalDto.getIdJournal()));
			assertNotNull(this.journalService.findIfJournalExist(journalDto.getIdJournal()));
		}
		assertNotNull(this.journalService.findAll());
	}

	@Order(6)
	@Test
	public void jourfindBy() throws JourIntrouvableException {
		List<JourDto> listJour = this.jourService.findAll();
		for (JourDto jourDto : listJour) {
			assertNotNull(this.jourService.findById(jourDto.getIdJour()));
			assertNotNull(this.jourService.findByTitre(jourDto.getTitre()));
			assertNotNull(this.jourService.findAll());
		}
	}

//	@Order(7)
//	@Test
//	public void update() throws JourIntrouvableException, JournalIntrouvableException, JournalExistantException {
//		String oldTitre = this.jourService.findByTitre("mon titre").getTitre();
//		this.jourService.findByTitre("mon titre").setTitre("titre update");
//		this.journalService.update(this.jourService.findByTitre("mon titre").getJournalDto());
//		assertNotEquals(oldTitre, this.jourService.findByTitre("mon titre").getTitre());
//	}

	@Order(8)
	@Test
	static void reset(@Autowired IJourRepository jourRepository, @Autowired IJournalRepository journalRepository,
			@Autowired IUtilisateurRepository utilisateurRepository) {
		utilisateurRepository.deleteAll();
		journalRepository.deleteAll();
		jourRepository.deleteAll();
	}
}
