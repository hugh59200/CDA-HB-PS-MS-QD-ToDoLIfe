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

import com.cda.todolife.dao.IFilmDao;
import com.cda.todolife.dto.FilmDto;
import com.cda.todolife.exception.film.FilmIntrouvableException;
import com.cda.todolife.exception.film.FilmeExistantException;
import com.cda.todolife.service.IFilmService;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
public class FilmTest {

	@Autowired
	IFilmService filmService;

	@Autowired
	IFilmDao filmDao;

	private static int i = 1;

	@BeforeEach
	public void count() {
		System.out.println("========> Test n°" + i);
		i++;
	}

	@Order(1)
	@Test
	public void clear() {
		this.filmDao.deleteAll();
		assertNotNull(this.filmService.findAll());
		assertEquals(this.filmService.findAll().size(), 0);
	}

	@Order(2)
	@Test
	public void create() {
		try {
			FilmDto film = FilmDto.builder().name("Batman").build();
			assertNotNull(film);
			this.filmService.add(film);
			assertNotNull(this.filmService.findAll());
			assertEquals(this.filmService.findAll().size(), 1);
		} catch (FilmeExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(3)
	@Test
	public void findById() {
		try {
			FilmDto film = this.filmService.findById(1);
			assertNotNull(film);
			int id = film.getIdFilm();
			assertEquals(film.getIdFilm(), id);
		} catch (FilmIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(4)
	@Test
	public void findByName() {
		try {
			FilmDto film = this.filmService.findByName("Batman");
			assertNotNull(film);
			String name = film.getName();
			assertEquals(film.getName(), name);
		} catch (FilmIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(5)
	@Test
	public void update() {
		try {
			FilmDto film = this.filmService.findById(1);
			assertNotNull(film);
			String name = film.getName();
			film.setName("Ironman");
			this.filmService.update(film);
			assertNotNull(film);
			assertNotEquals(film.getName(), name);
		} catch (FilmIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FilmeExistantException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Order(6)
	@Test
	public void delete() {
		try {
			FilmDto film = this.filmService.findById(1);
			assertNotNull(film);
			int id = film.getIdFilm();
			this.filmService.deleteById(id);
			assertEquals(this.filmService.findAll().size(), 0);
			this.filmDao.deleteAll();
		} catch (FilmIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
