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
//import com.cda.todolife.dto.SerieDto;
//import com.cda.todolife.dto.WatchListDto;
//import com.cda.todolife.exception.SerieExistanteException;
//import com.cda.todolife.exception.SerieIntrouvableException;
//import com.cda.todolife.exception.WatchListExistanteException;
//import com.cda.todolife.exception.WatchListIntrouvableException;
//import com.cda.todolife.repository.ISerieRepository;
//import com.cda.todolife.repository.IWatchListRepository;
//import com.cda.todolife.service.ISerieService;
//import com.cda.todolife.service.IWatchListService;
//
//@TestInstance(Lifecycle.PER_CLASS)
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//@SpringBootTest
//public class SerieTest {
//
//	private static int i;
//
//	@Autowired
//	IWatchListService watchListService;
//
//	@Autowired
//	ISerieService serieService;
//
//	@BeforeAll
//	static void vider(@Autowired IWatchListRepository watchListDao, @Autowired ISerieRepository serieDao) {
//		watchListDao.deleteAll();
//		serieDao.deleteAll();
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
//		assertEquals(0, this.serieService.findAll().size());
//
//	}
//
//	@Order(2)
//	@Test
//	public void create() {
//		try {
//			int vSize = this.serieService.findAll().size();
//			this.watchListService.add(WatchListDto.builder().label("myList_a").build());
//			this.serieService.add(SerieDto.builder().name("WandaVision").saison(1).episode(9)
//					.watchList(watchListService.findById(1)).build());
//			assertEquals(vSize + 1, this.serieService.findAll().size());
//		} catch (WatchListExistanteException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SerieExistanteException e) {
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
//			assertNotNull(this.serieService.findById(1));
//		} catch (SerieIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(5)
//	@Test
//	public void findByName() {
//		try {
//			assertNotNull(this.serieService.findByName("WandaVision"));
//		} catch (SerieIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(6)
//	@Test
//	public void findBySaison() {
//		try {
//			assertNotNull(this.serieService.findBySaison(1));
//		} catch (SerieIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(7)
//	@Test
//	public void findByEpisode() {
//		try {
//			assertNotNull(this.serieService.findByEpisode(9));
//		} catch (SerieIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@Order(8)
//	@Test
//	public void update() {
//		try {
//			SerieDto serie = this.serieService.findById(1);
//			String name = serie.getName();
//			int episode = serie.getEpisode();
//			serie.setName("Loki");
//			serie.setEpisode(6);
//			this.serieService.update(serie);
//			assertNotEquals(serie.getName(), name);
//			assertNotEquals(serie.getEpisode(), episode);
//
//		} catch (SerieIntrouvableException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SerieExistanteException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	
//	@Order(9)
//	@Test
//	static void reset(@Autowired IWatchListRepository watchListDao, @Autowired ISerieRepository serieDao) {
//		watchListDao.deleteAll();
//		serieDao.deleteAll();
//	}
//}
