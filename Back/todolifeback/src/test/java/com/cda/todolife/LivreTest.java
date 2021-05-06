//package com.cda.todolife;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
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
//import com.cda.todolife.dto.LivreDto;
//import com.cda.todolife.dto.WatchListDto;
//import com.cda.todolife.exception.LivreExistantException;
//import com.cda.todolife.exception.LivreIntrouvableException;
//import com.cda.todolife.repository.IWatchListRepository;
//import com.cda.todolife.repository.IlivreRepository;
//import com.cda.todolife.service.ILivreService;
//import com.cda.todolife.service.IWatchListService;
//
//@TestInstance(Lifecycle.PER_CLASS)
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//@SpringBootTest
//public class LivreTest {
//
//	private static int i;
//
//	@Autowired
//	IWatchListService watchListService;
//
//	@Autowired
//	ILivreService livreService;
//
//	@BeforeAll
//	static void vider(@Autowired IWatchListRepository watchListDao, @Autowired IlivreRepository livreDao) {
//		watchListDao.deleteAll();
//		livreDao.deleteAll();
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
//		assertEquals(0, this.watchListService.findAll().size());
//		assertEquals(0, this.livreService.findAll().size());
//	}
//
////	@Order(2)
////	@Test
////	public void create() {
////		try {
////			int vSize = this.livreService.findAll().size();
////			this.watchListService.add(WatchListDto.builder().label("myList_a").build());
////			this.livreService.add(LivreDto.builder().title("book-one").pageActuel(244)
////					.watchList(watchListService.findById(1)).build());
////			assertEquals(vSize + 1, this.livreService.findAll().size());
////		} catch (WatchListExistanteException e) {
////			// TODO Auto-generated catch block
////			e.printStackTrace();
////		} catch (LivreExistantException e) {
////			// TODO Auto-generated catch block
////			e.printStackTrace();
////		} catch (WatchListIntrouvableException e) {
////			// TODO Auto-generated catch block
////			e.printStackTrace();
////		}
////	}
//
////	@Order(3)
////	@Test
////	public void doublons() throws WatchListExistanteException{
////		int vSize = this.watchListService.findAll().size();
////		assertThrows(WatchListExistanteException.class, () -> {
////			this.watchListService.add(WatchListDto.builder().label("myList_a").build());
////		});
////		System.err.println(this.watchListService.findAll());
////		assertEquals(vSize, this.watchListService.findAll().size());
////		
////	}
////
//	@Order(4)
//	@Test
//	public void findById() {
//		try {
//			assertNotNull(this.livreService.findById(1));
//		} catch (LivreIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(5)
//	@Test
//	public void findByTitle() {
//		try {
//			assertNotNull(this.livreService.findByTitle("book-one"));
//		} catch (LivreIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(6)
//	@Test
//	public void findByPage() {
//		try {
//			assertNotNull(this.livreService.findByPageActuel(244));
//		} catch (LivreIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(7)
//	@Test
//	public void update() {
//		try {
//			LivreDto livre = this.livreService.findById(1);
//			String title = livre.getTitle();
//			int page = livre.getPageActuel();
//			livre.setTitle("book-two");
//			livre.setPageActuel(156);
//			this.livreService.update(livre);
//			assertNotEquals(livre.getTitle(), title);
//			assertNotEquals(livre.getPageActuel(), page);
//
//		} catch (LivreIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (LivreExistantException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(8)
//	@Test
//	static void reset(@Autowired IWatchListRepository watchListDao, @Autowired IlivreRepository livreDao) {
//		watchListDao.deleteAll();
//		livreDao.deleteAll();
//	}
//}
