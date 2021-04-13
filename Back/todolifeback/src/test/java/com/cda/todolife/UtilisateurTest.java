package com.cda.todolife;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.cda.todolife.dto.UtilisateurDto;
import com.cda.todolife.exception.ResourceAlreadyExist;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.repository.IUtilisateurRepository;
import com.cda.todolife.service.IUtilisateurService;

@TestInstance(Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
class UtilisateurTest {

	@Autowired
	IUtilisateurService utilisateurService;

	@BeforeAll
	public void clean(@Autowired IUtilisateurRepository userRepository) {

		userRepository.deleteAll();

	}

	@Order(1)
	@Test
	void testTableVide() throws ResourceAlreadyExist {
		assertEquals(0, this.utilisateurService.list().size());
	}

	@Order(2)
	@Test
	void testCreate() throws ResourceAlreadyExist {
		System.err.println("debut test create");
		this.utilisateurService.create(UtilisateurDto.builder().email("bonjour@gmail.com").nom("salut").prenom("dzadza")
				.password("azerty").username("dede").build());

		assertEquals(1, this.utilisateurService.list().size());
		System.err.println(utilisateurService.list());
		System.err.println("fin test create");
	}

	@Order(3)
	@Test

	void testDuplication() {
		System.err.println("debut test duplication");
		System.err.println(utilisateurService.list());

		int size = this.utilisateurService.list().size();
		assertThrows(ResourceAlreadyExist.class, () -> {
			this.utilisateurService
					.create(UtilisateurDto.builder().username("dede").email("bonjour@gmail.com").build());
		});
		assertEquals(size, this.utilisateurService.list().size());
		System.err.println("fin test duplication");

	}

	@Order(4)
	@Test
	void testUpdate() throws ResourceAlreadyExist, ResourceNotFoundException {
		System.err.println("debut test Update");

		UtilisateurDto userDto = this.utilisateurService.show(this.utilisateurService.list().get(0).getIdUtilisateur());
		userDto.setUsername("dada");
		this.utilisateurService.update(userDto);
		userDto = this.utilisateurService.show(this.utilisateurService.list().get(0).getIdUtilisateur());
		assertEquals("dada", userDto.getUsername());
		System.err.println(userDto.getUsername());

		System.err.println("fin test Update");
	}

//	@Order(5)
//	@Test
//	void testDelete() throws ResourceNotFoundException {
//		System.err.println("debut test delete");
//
//		System.err.println(utilisateurService.list());
//
//		this.utilisateurService.delete(1);
//		assertEquals(0, this.utilisateurService.list().size());
//		System.err.println(utilisateurService.list());
//		System.err.println("fin test delete");
//	}

}
