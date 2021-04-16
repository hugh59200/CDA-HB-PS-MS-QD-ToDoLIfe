package com.cda.todolife.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UtilisateurDto {

	private int idUtilisateur;
	private String nom;
	private String prenom;
	private String dateNaissance;
	private String email;
	private String username;
	private String password;
	
}
