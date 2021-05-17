package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;

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

		// creation d'un utilisateur

		int nbUser = this.jourService.findAll().size();
		UtilisateurDto utilisateurDto = UtilisateurDto.builder().email("h.bogrand@gmail.com").nom("bogrand")
				.prenom("hugo").password("12345").username("hugh59").dateNaissance(Date.valueOf("1988-10-10")).build();
		try {
			this.IUtilisateurService.create(utilisateurDto);
			utilisateurDto.setIdUtilisateur(this.IUtilisateurService.findByUsername("hugh59").getIdUtilisateur());
		} catch (ResourceAlreadyExist | ResourceNotFoundException e) {
			e.printStackTrace();
		}
		assertEquals(nbUser + 1, this.IUtilisateurService.list().size());

		// creation d'un journal

		int vSizeJournal = this.journalService.findAll().size();
		JournalDto journalDto = JournalDto.builder().utilisateurDto(utilisateurDto).build();
		try {
			this.journalService.add(journalDto);
		} catch (JournalExistantException e) {
			e.printStackTrace();
		}
		assertEquals(vSizeJournal + 1, this.journalService.findAll().size());

		// creation d'un jour

		int vSizeJour = this.jourService.findAll().size();
		JourDto jourDto = JourDto.builder().dateJour("2021-05-17").titre("mon titre").humeur(4).texte("blablabla")
				.journalDto(journalDto).build();
		try {
			this.jourService.add(utilisateurDto.getIdUtilisateur(), jourDto);
		} catch (JourExistantException | JournalIntrouvableException e) {
			e.printStackTrace();
		}
		assertEquals(vSizeJour + 1, this.jourService.findAll().size());
	}

	@Order(3)
	@Test
	public void DoublonExceptions() {

		// utilisateur
		int nbUser = this.jourService.findAll().size();
		Assertions.assertThrows(ResourceAlreadyExist.class, () -> {
			this.IUtilisateurService.create(this.IUtilisateurService.findByUsername("hugh59"));
		});
		assertEquals(nbUser, this.jourService.findAll().size());

		// journal
		int vSizeJournal = this.journalService.findAll().size();
		Assertions.assertThrows(JournalExistantException.class, () -> {
			this.journalService.add(this.journalService.findByUtilisateurUsername("hugh59"));
		});
		assertEquals(vSizeJournal, this.journalService.findAll().size());

		// jour
		int vSizeJour = this.jourService.findAll().size();
		Assertions.assertThrows(JourExistantException.class, () -> {
			this.jourService.add(this.IUtilisateurService.findByUsername("hugh59").getIdUtilisateur(),
					this.jourService.findByTitre("mon titre"));
		});
		assertEquals(vSizeJour, this.jourService.findAll().size());
	}
	
	@Order(4)
	@Test
	public void introuvableExceptions() {
		
		// utilisateur
	
		
		
		// journal

		// jour

	}

//	@Order(4)
//	@Test
//	public void utilisateurfindBy() {
//
//		List<UtilisateurDto> listUtilisateur = this.IUtilisateurService.list();
//
//		for (UtilisateurDto utilisateurDto : listUtilisateur) {
//			try {
//				assertNotNull(this.IUtilisateurService.findByUsername(utilisateurDto.getUsername()));
//				assertNotNull(this.IUtilisateurService.findByidUtilisateur(utilisateurDto.getIdUtilisateur()));
//			} catch (ResourceNotFoundException e) {
//				e.printStackTrace();
//			}
//		}
//	}

//	@Order(5)
//	@Test
//	public void journalfindBy() {
//
//		List<JournalDto> findAll = this.journalService.findAll();
//		
//		try {
//			List<JournalDto> listJournal = findAll;
//			for (JournalDto journalDto : listJournal) {
//				assertNotNull(this.journalService.findById(journalDto.getIdJournal()));
//				assertNotNull(this.journalService.findIfJournalExist(journalDto.getIdJournal()));
//				
//				int findAllBeforeDelete = this.journalService.findAll().size();
//				this.journalService.deleteById(journalDto.getIdJournal());
//				int findAllbAfterDelete = this.journalService.findAll().size();
//				
//				assertEquals(findAllBeforeDelete -1 , findAllbAfterDelete);
//			}
//		} catch (JournalIntrouvableException e) {
//			e.printStackTrace();
//		}
//	}

//	@Order(6)
//	@Test
//	public void jourfindBy() {
//
//		List<JourDto> listJour = this.jourService.findAll();
//		for (JourDto jourDto : listJour) {
//			try {
//				assertNotNull(this.jourService.findById(jourDto.getIdJour()));
//				assertNotNull(this.jourService.findByTitre(jourDto.getTitre()));
//			} catch (JourIntrouvableException e) {
//				e.printStackTrace();
//			}
//			assertNotNull(this.jourService.findAll());
//		}
//	}

//	@Order(7)
//	@Test
//	public void updateUtilisateur() {
//		List<UtilisateurDto> listUtilisateur = this.IUtilisateurService.list();
//
//		for (UtilisateurDto utilisateurDto : listUtilisateur) {
//			String oldUsername = utilisateurDto.getUsername();
//			String oldNom = utilisateurDto.getNom();
//			String oldPrenom = utilisateurDto.getPrenom();
//			Date oldDateNaissance = utilisateurDto.getDateNaissance();
//			utilisateurDto.setUsername("paul59");
//			Date date = Date.valueOf("1992-10-10");
//			utilisateurDto.setDateNaissance(date);
//			utilisateurDto.setNom("zakbandt");
//			utilisateurDto.setPrenom("paul");
//			try {
//				this.IUtilisateurService.update(utilisateurDto);
//			} catch (ResourceAlreadyExist e) {
//				e.printStackTrace();
//			}
//			assertNotEquals(utilisateurDto.getUsername(), oldUsername);
//			assertNotEquals(utilisateurDto.getDateNaissance(), oldDateNaissance);
//			assertNotEquals(utilisateurDto.getNom(), oldNom);
//			assertNotEquals(utilisateurDto.getPrenom(), oldPrenom);
//		}
//	}

//	@Order(8)
//	@Test
//	public void deleteUtilisateur() {
//
//		int nbUserBeforeDelete = this.IUtilisateurService.list().size();
//
////		try {
////		this.journalService.deleteById(this.journalService.findById(nbUserBeforeDelete));
////			this.IUtilisateurService.delete(this.IUtilisateurService.findByUsername("paul59").getId());
////		} catch (ResourceNotFoundException e) {
////			e.printStackTrace();
////		}
////		assertEquals(nbUserBeforeDelete - 1, this.IUtilisateurService.list().size());
//	}

//	// update a revoir
//	@Order(7)
//	@Test
//	public void updateJour() {
//		List<JourDto> listJourDto = this.jourService.findAll();
//
//		for (JourDto jourDto : listJourDto) {
//			String oldDateJour = jourDto.getDateJour();
//			int oldHumeur = jourDto.getHumeur();
//			String oldTexte = jourDto.getTexte();
//			String oldTitre = jourDto.getTitre();
//			JourDto newJourDto = new JourDto();
//			newJourDto.setDateJour("2021-05-17");
//			newJourDto.setTitre("new titre");
//			newJourDto.setHumeur(1);
//			newJourDto.setTexte("new blabla");
//			try {
//				this.jourService.update(newJourDto, jourDto.getJournalDto().getUtilisateurDto().getIdUtilisateur());
//			} catch (JourIntrouvableException | JourExistantException | JournalIntrouvableException
//					| ResourceNotFoundException e) {
//				e.printStackTrace();
//			}
//			assertNotEquals(jourDto.getDateJour(), oldDateJour);
//			assertNotEquals(jourDto.getHumeur(), oldHumeur);
//			assertNotEquals(jourDto.getTexte(), oldTexte);
//			assertNotEquals(jourDto.getTitre(), oldTitre);
//		}
//
//	}

	@Order(9)
	@Test
	static void reset(@Autowired IJourRepository jourRepository, @Autowired IJournalRepository journalRepository,
			@Autowired IUtilisateurRepository utilisateurRepository) {
		utilisateurRepository.deleteAll();
		journalRepository.deleteAll();
		jourRepository.deleteAll();
	}
}
