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

import com.cda.todolife.dao.IWatchListDao;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.watchlist.WatchListExistanteException;
import com.cda.todolife.exception.watchlist.WatchListIntrouvableException;
import com.cda.todolife.service.IWatchListService;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
public class WatchLisTest {

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
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(3)
	@Test
	public void findById() {
		try {
			WatchListDto list = this.watchListService.findById(1);
			assertNotNull(list);
			int id = list.getIdWatchList();
			assertEquals(list.getIdWatchList(), id);
		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(4)
	@Test
	public void findByLabel() {
		try {
			WatchListDto list = this.watchListService.findByLabel("myList_a");
			assertNotNull(list);
			String label = list.getLabel();
			assertEquals(list.getLabel(), label);
		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(5)
	@Test
	public void update() {
		try {
			WatchListDto list = this.watchListService.findById(1);
			assertNotNull(list);
			String label = list.getLabel(); 
			list.setLabel("myList_b");
			this.watchListService.update(list);
			assertNotNull(list);
			assertNotEquals(list.getLabel(), label);
		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WatchListExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(6)
	@Test
	public void delete() {
		try {
			WatchListDto list = this.watchListService.findById(1);
			assertNotNull(list);
			int id = list.getIdWatchList();
			this.watchListService.deleteById(id);
			assertEquals(this.watchListService.findAll().size(), 0);
			this.watchListDao.deleteAll();
		} catch (WatchListIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
