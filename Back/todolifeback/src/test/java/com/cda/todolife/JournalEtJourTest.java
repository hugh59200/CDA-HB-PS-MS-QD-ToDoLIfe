//package com.cda.todolife;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.MethodOrderer;
//import org.junit.jupiter.api.Order;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.TestInstance;
//import org.junit.jupiter.api.TestInstance.Lifecycle;
//import org.junit.jupiter.api.TestMethodOrder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.cda.todolife.dto.JourDto;
//import com.cda.todolife.dto.JournalDto;
//import com.cda.todolife.exception.JourExistantException;
//import com.cda.todolife.exception.JournalExistantException;
//import com.cda.todolife.exception.JournalIntrouvableException;
//import com.cda.todolife.repository.IJourRepository;
//import com.cda.todolife.repository.IJournalRepository;
//import com.cda.todolife.service.IJourService;
//import com.cda.todolife.service.IJournalService;
//
//@TestInstance(Lifecycle.PER_CLASS)
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//@SpringBootTest
//public class JournalEtJourTest {
//
//	private static int i;
//
//	@Autowired
//	IJourService jourService;
//
//	@Autowired
//	IJournalService journalService;
//
//	@BeforeAll
//	static void vider(@Autowired IJourRepository jourDao, @Autowired IJournalRepository journalDao) {
//		jourDao.deleteAll();
//		journalDao.deleteAll();
//		System.out.println("ok");
//	}
//
//	@BeforeEach
//	public void count() {
//		i++;
//		System.err.println("Test n°" + i);
//	}
//
//	@Order(1)
//	@Test
//	public void vide() {
//		assertEquals(0, this.jourService.findAll().size());
//		assertEquals(0, this.journalService.findAll().size());
//	}
//
//	@Order(2)
//	@Test
//	public void create() {
//		try {
//			int vSizeJour = this.jourService.findAll().size();
//			int vSizeJournal = this.journalService.findAll().size();
//
//			this.journalService.add(JournalDto.builder().label("label").build());
//			this.jourService.add(1,
//					JourDto.builder().titre("titre").dateJour("2021/05/05").humeur(2).texte("blabla").build());
//
//			assertEquals(vSizeJour + 1, this.jourService.findAll().size());
//			assertEquals(vSizeJournal + 1, this.jourService.findAll().size());
//
//		} catch (JournalExistantException e) {
//			e.printStackTrace();
//		} catch (JourExistantException e) {
//			e.printStackTrace();
//		} catch (JournalIntrouvableException e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Order(3)
//	@Test
//	public void doublons() throws JournalExistantException {
//		int vSize = this.journalService.findAll().size();
//		assertThrows(JournalExistantException.class, () -> {
//			this.journalService.add(JournalDto.builder().label("label").build());
//		});
//		System.err.println(this.journalService.findAll());
//		assertEquals(vSize, this.journalService.findAll().size());
//	}
//
//	@Order(4)
//	@Test
//	public void findById() {
//		try {
//			assertNotNull(this.journalService.findById(1));
//		} catch (JournalIntrouvableException e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Order(5)
//	@Test
//	public void findByName() {
//		try {
//			assertNotNull(this.journalService.findByLabel("paulJournal"));
//		} catch (JournalIntrouvableException e) {
//			e.printStackTrace();
//		}
//	}
//
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
//
//	@Order(7)
//	@Test
//	static void reset(@Autowired IJourRepository jourDao, @Autowired IJournalRepository journalDao) {
//		journalDao.deleteAll();
//		jourDao.deleteAll();
//	}
//}
