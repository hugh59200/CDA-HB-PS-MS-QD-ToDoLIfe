package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

//import org.junit.jupiter.api.Assertions;
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
import static org.junit.jupiter.api.Assertions.assertNotNull;
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
		System.out.println("initialisation");
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
	public void create() {

		// etape 1 -> creation d'un utilisateur

		int nbUser = this.jourService.findAll().size();
		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
				.prenom("hugo").password("12345").username("hugh59").dateNaissance(new java.sql.Date(1988 - 10 - 10))
				.build();
		try {
			this.IUtilisateurService.create(utilisateurDto);
		} catch (ResourceAlreadyExist e) {
			e.printStackTrace();
		}
		assertEquals(nbUser + 1, this.IUtilisateurService.list().size());

		// etape 2 -> creation d'un jour

		JourDto jourDto = JourDto.builder().dateJour("2021 - 05 - 17").titre("mon titre").humeur(4).texte("blablabla")
				.build();

		// etape 3 -> creation d'un journal

		int vSizeJournal = this.journalService.findAll().size();
		int vSizeJour = this.jourService.findAll().size();
		JournalDto journalDto = JournalDto.builder().build();

		// 1) on lie le journal a l'utilisateur (crée étape 1) et on lui attribut le
		// jour (crée étape 2)

		try {
			utilisateurDto.setIdUtilisateur(this.IUtilisateurService.findByUsername("hugh59").getId());
		} catch (ResourceNotFoundException e) {
			e.printStackTrace();
		}

		journalDto.setUtilisateurDto(utilisateurDto);

		List<JourDto> listJour = new ArrayList<JourDto>();
		listJour.add(jourDto);
		journalDto.setListJourDto(listJour);

		// 2) on peu maintenant l'ajouter sans soucis puis lancer les test concernant
		// journal et jour

		try {
			this.journalService.add(journalDto);
		} catch (JournalExistantException e) {
			e.printStackTrace();
		}

		assertEquals(vSizeJournal + 1, this.journalService.findAll().size());

		try {
			this.jourService.add(utilisateurDto.getIdUtilisateur(), jourDto);
		} catch (JourExistantException e) {
			e.printStackTrace();
		} catch (JournalIntrouvableException e) {
			e.printStackTrace();
		}

		assertEquals(vSizeJour + 1, this.jourService.findAll().size());

	}

//	@Order(3)
//	@Test
//	public void doublons() throws JournalExistantException {
//		
//		int vSize = this.journalService.findAll().size();
//		
//		Assertions.assertThrows(JournalExistantException.class, () -> {
//			this.journalService.add(JournalDto.builder().build());
//		});
//		
//		System.err.println(this.journalService.findAll());
//		
//		assertEquals(vSize, this.journalService.findAll().size());
//	}

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
	public void journalfindBy() {

		try {
			List<JournalDto> listJournal = this.journalService.findAll();
			for (JournalDto journalDto : listJournal) {
				assertNotNull(this.journalService.findById(journalDto.getIdJournal()));
				assertNotNull(this.journalService.findIfJournalExist(journalDto.getIdJournal()));
			}
		} catch (JournalIntrouvableException e) {
			e.printStackTrace();
		}
		assertNotNull(this.journalService.findAll());
	}

	@Order(6)
	@Test
	public void jourfindBy() {

		List<JourDto> listJour = this.jourService.findAll();
		for (JourDto jourDto : listJour) {
			try {
				assertNotNull(this.jourService.findById(jourDto.getIdJour()));
				assertNotNull(this.jourService.findByTitre(jourDto.getTitre()));
			} catch (JourIntrouvableException e) {
				e.printStackTrace();
			}
			assertNotNull(this.jourService.findAll());
		}
	}

//	@Order(6)
//	@Test
//	public void update() {
//		try {
//			JournalDto journalDto = this.journalService.findById(1);
//			String titre = journalDto.getLabel();
//			journalDto.setLabel("hugoJournal");
//			this.journalService.update(journalDto);
//			assertNotEquals(journalDto.getLabel(), titre);
//		} catch (JournalIntrouvableException e) {
//			e.printStackTrace();
//		} catch (JournalExistantException e) {
//			e.printStackTrace();
//		}
//	}

	@Order(7)
	@Test
	static void reset(@Autowired IJourRepository jourRepository, @Autowired IJournalRepository journalRepository,
			@Autowired IUtilisateurRepository utilisateurRepository) {
		utilisateurRepository.deleteAll();
		journalRepository.deleteAll();
		jourRepository.deleteAll();
	}
}
