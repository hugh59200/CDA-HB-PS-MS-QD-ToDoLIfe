package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class UtilisateurDtoList {

	private int idUtilisateur;
	private String nom;
	private String prenom;
	private String dateNaissance;
	private String username;

}