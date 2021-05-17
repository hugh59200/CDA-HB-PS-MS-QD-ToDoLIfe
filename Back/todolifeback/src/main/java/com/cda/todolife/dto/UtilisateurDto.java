package com.cda.todolife.dto;


import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(of = { "prenom", "dateNaissance", "email" })
public class UtilisateurDto {

	private int idUtilisateur;
	private String nom;
	private String prenom;
	private Date dateNaissance;
	private String email;
	private String username;
	private String password;
	private String token;
}
