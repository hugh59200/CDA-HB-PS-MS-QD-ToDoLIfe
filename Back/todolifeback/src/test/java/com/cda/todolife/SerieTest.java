package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cda.todolife.dao.ISerieDao;
import com.cda.todolife.dao.IWatchListDao;
import com.cda.todolife.dto.SerieDto;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.serie.SerieExistanteException;
import com.cda.todolife.exception.serie.SerieIntrouvableException;
import com.cda.todolife.exception.watchlist.WatchListExistanteException;
import com.cda.todolife.model.WatchList;
import com.cda.todolife.service.ISerieService;
import com.cda.todolife.service.IWatchListService;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
public class SerieTest {

	@Autowired
	ISerieService serieService;

	@Autowired
	ISerieDao serieDao;

	@Autowired
	IWatchListService watchListService;

	@Autowired
	IWatchListDao watchListDao;

	private static int i = 1;

	@BeforeEach
	public void count() {
		System.out.println("========> Test n°" + i);
		i++;
	}

	@Order(1)
	@Test
	public void clear() {
		this.serieDao.deleteAll();
		assertNotNull(this.serieService.findAll());
		assertEquals(this.serieService.findAll().size(), 0);
		this.watchListDao.deleteAll();
		assertNotNull(this.watchListService.findAll());
		assertEquals(this.watchListService.findAll().size(), 0);
	}

	@Order(2)
	@Test
	public void create() {
		try {
			WatchListDto list = WatchListDto.builder().label("myList_a").build();
			assertNotNull(list);
			this.watchListService.add(list);
			assertNotNull(this.watchListService.findAll());
			assertEquals(this.watchListService.findAll().size(), 1);

			WatchList listTest = WatchList.builder().idWatchList(1).label("myList_a").build();
			SerieDto serie = SerieDto.builder().name("WandaVisison").saison(1).episode(9).watchList(listTest).build();
			assertNotNull(serie);
			this.serieService.add(serie);
			assertNotNull(this.serieService.findAll());
			assertEquals(this.serieService.findAll().size(), 1);
		} catch (SerieExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(3)
	@Test
	public void findById() {
		try {
			SerieDto serie = this.serieService.findById(1);
			assertNotNull(serie);
			int id = serie.getIdSerie();
			assertEquals(serie.getIdSerie(), id);
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(4)
	@Test
	public void findByName() {
		try {
			SerieDto serie = this.serieService.findByName("WandaVisison");
			assertNotNull(serie);
			String name = serie.getName();
			assertEquals(serie.getName(), name);
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(5)
	@Test
	public void findBySaison() {
		try {
			SerieDto serie = this.serieService.findBySaison(1);
			assertNotNull(serie);
			int saison = serie.getSaison();
			assertEquals(serie.getSaison(), saison);
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(6)
	@Test
	public void findByEpisode() {
		try {
			SerieDto serie = this.serieService.findByEpisode(9);
			assertNotNull(serie);
			int episode = serie.getEpisode();
			assertEquals(serie.getEpisode(), episode);
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(7)
	@Test
	public void update() {
		try {
			SerieDto serie = serieService.findById(1);
			assertNotNull(serie);
			String nom = serie.getName();
			int episode = serie.getEpisode();
			serie.setName("Loki");
			serie.setEpisode(6);
			serieService.update(serie);
			assertNotNull(serie);
			assertNotEquals(serie.getName(), nom);
			assertNotEquals(serie.getEpisode(), episode);
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SerieExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(8)
	@Test
	public void delete() {
		try {
			SerieDto serie = serieService.findById(1);
			assertNotNull(serie);
			int id = serie.getIdSerie();
			this.serieService.deleteById(id);
			assertEquals(this.serieService.findAll().size(), 0);
			this.serieDao.deleteAll();
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
