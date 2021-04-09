package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cda.todolife.dao.ISerieDao;
import com.cda.todolife.dto.SerieDto;
import com.cda.todolife.exception.serie.SerieExistanteException;
import com.cda.todolife.exception.serie.SerieIntrouvableException;
import com.cda.todolife.service.ISerieService;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class SerieTest {

	@Autowired
	ISerieService serieService;

	@BeforeEach
	void vider(@Autowired ISerieDao serieDao) {
		serieDao.deleteAll();
//		System.out.println("reset de la table série");
	}
	

	
	

	// lister
	@Order(1)
	@Test
	void verifierTableVide() {
		assertEquals(0, this.serieService.findAll().size());
	}

	// ajouter
	@Order(2)
	@Test
	void ajouterUneSerie() {
		int taille = this.serieService.findAll().size();
		try {
			this.serieService.add(SerieDto.builder().name("Wanda Vision").saison(1).episode(9).build());
		} catch (SerieExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			assertEquals(taille + 1, this.serieService.findAll().size());
		}
	}

	// modifier
	@Order(3)
	@Test
	void modifierUneSerie() {
		try {
			this.serieService.add(SerieDto.builder().name("Wanda Vision").saison(1).episode(9).build());
			SerieDto serie = this.serieService.findById(1);

			String nom = serie.getName();
			int id = serie.getIdSerie();
			System.out.println("==============");
			System.out.println(this.serieService.findAll());

//			this.serieService.update(serie.builder().idSerie(id).name("Loki").saison(1).episode(6).build());
//			System.out.println("=> nom modif : " + serie.getName());
//			System.out.println("=============================");
//			System.out.println(this.serieService.findAll());
//
//
//			assertNotEquals(nom, serie.getName());

		} catch (SerieExistanteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SerieIntrouvableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}

//					System.out.println("=================");
//					System.out.println("=> récupérer le l'id de la série");
//					SerieDto serie = this.serieService.findById(this.serieService.findAll().size()+1);
//					System.out.println(serie);

//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println("=================");
//					System.out.println(serie);
//					String nameBefore = serie.getName();
//					System.out.println(nameBefore);
//					
//					System.out.println("3 => ");
//					// modifier la série trouvée
//					this.serieService.update(serie.builder().name("Loki").saison(1).episode(6).build());
//					System.out.println(serie.getName());
//					assertNotEquals(nameBefore, serie.getName());
