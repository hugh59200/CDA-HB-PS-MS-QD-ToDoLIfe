package com.cda.todolife.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cda.todolife.model.Utilisateur;

public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Integer> {

	Optional<Utilisateur> findByUsername(String username);

}
