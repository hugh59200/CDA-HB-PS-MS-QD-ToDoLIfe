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
//import com.cda.todolife.dto.FilmDto;
//import com.cda.todolife.dto.WatchListDto;
//import com.cda.todolife.exception.FilmExistantException;
//import com.cda.todolife.exception.FilmIntrouvableException;
//import com.cda.todolife.exception.WatchListExistanteException;
//import com.cda.todolife.exception.WatchListIntrouvableException;
//import com.cda.todolife.repository.IFilmRepository;
//import com.cda.todolife.repository.IWatchListRepository;
//import com.cda.todolife.service.IFilmService;
//import com.cda.todolife.service.IWatchListService;
//
//@TestInstance(Lifecycle.PER_CLASS)
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//@SpringBootTest
//public class FilmTest {
//
//	private static int i;
//
//	@Autowired
//	IWatchListService watchListService;
//
//	@Autowired
//	IFilmService filmService;
//
//	@BeforeAll
//	static void vider(@Autowired IWatchListRepository watchListDao, @Autowired IFilmRepository filmDao) {
//		watchListDao.deleteAll();
//		filmDao.deleteAll();
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
//		assertEquals(0, this.filmService.findAll().size());
//	}
//
//	@Order(2)
//	@Test
//	public void create() {
//		try {
//			int vSize = this.filmService.findAll().size();
//			this.watchListService.add(WatchListDto.builder().label("myList_a").build());
//			this.filmService.add(FilmDto.builder().name("Batman").watchList(watchListService.findById(1)).build());
//			assertEquals(vSize + 1, this.filmService.findAll().size());
//		} catch (WatchListExistanteException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (FilmExistantException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (WatchListIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
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
//			assertNotNull(this.filmService.findById(1));
//		} catch (FilmIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(5)
//	@Test
//	public void findByName() {
//		try {
//			assertNotNull(this.filmService.findByName("Batman"));
//		} catch (FilmIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(6)
//	@Test
//	public void update() {
//		try {
//			FilmDto film = this.filmService.findById(1);
//			String name = film.getName();
//			film.setName("Thor");
//			this.filmService.update(film);
//			assertNotEquals(film.getName(), name);
//		} catch (FilmIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (FilmExistantException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	
//	@Order(7)
//	@Test
//	static void reset(@Autowired IWatchListRepository watchListDao, @Autowired IFilmRepository filmDao) {
//		watchListDao.deleteAll();
//		filmDao.deleteAll();
//	}
//}
