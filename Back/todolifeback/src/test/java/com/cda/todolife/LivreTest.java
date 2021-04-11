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

import com.cda.todolife.dao.ILivreDao;
import com.cda.todolife.dao.IWatchListDao;
import com.cda.todolife.dto.LivreDto;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.livre.LivreExistantException;
import com.cda.todolife.exception.livre.LivreIntrouvableException;
import com.cda.todolife.exception.watchlist.WatchListExistanteException;
import com.cda.todolife.model.WatchList;
import com.cda.todolife.service.ILivreService;
import com.cda.todolife.service.IWatchListService;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
public class LivreTest {

	@Autowired
	ILivreService livreService;

	@Autowired
	ILivreDao livreDao;

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
		this.livreDao.deleteAll();
		assertNotNull(this.livreService.findAll());
		assertEquals(this.livreService.findAll().size(), 0);
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
			LivreDto livre = LivreDto.builder().title("book_one").pageActuel(244).watchList(listTest).build();
			assertNotNull(livre);
			this.livreService.add(livre);
			assertNotNull(this.livreService.findAll());
			assertEquals(this.livreService.findAll().size(), 1);
		} catch (LivreExistantException e) {
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
			LivreDto livre = this.livreService.findById(1);
			assertNotNull(livre);
			int id = livre.getIdLivre();
			assertEquals(livre.getIdLivre(), id);
		} catch (LivreIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(4)
	@Test
	public void findByTitle() {
		try {
			LivreDto livre = this.livreService.findByTitle("book_one");
			assertNotNull(livre);
			String title = livre.getTitle();
			assertEquals(livre.getTitle(), title);
		} catch (LivreIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(5)
	@Test
	public void findByPageActuel() {
		try {
			LivreDto livre = this.livreService.findByPageActuel(244);
			assertNotNull(livre);
			int pageActuel = livre.getPageActuel();
			assertEquals(livre.getPageActuel(), pageActuel);
		} catch (LivreIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(6)
	@Test
	public void update() {
		try {
			LivreDto livre = this.livreService.findById(1);
			assertNotNull(livre);
			String title = livre.getTitle();
			int pageActuel = livre.getPageActuel();
			livre.setTitle("book_two");
			livre.setPageActuel(519);
			this.livreService.update(livre);
			assertNotNull(livre);
			assertNotEquals(livre.getTitle(), title);
			assertNotEquals(livre.getPageActuel(), pageActuel);
		} catch (LivreIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (LivreExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(7)
	@Test
	public void delete() {
		try {
			LivreDto livre = this.livreService.findById(1);
			assertNotNull(livre);
			int id = livre.getIdLivre();
			this.livreService.deleteById(id);
			assertEquals(this.livreService.findAll().size(), 0);
			this.livreDao.deleteAll();
		} catch (LivreIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
