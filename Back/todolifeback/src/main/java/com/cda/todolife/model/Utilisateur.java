package com.cda.todolife.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "email"), @UniqueConstraint(columnNames = "username") })
public class Utilisateur implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idUtilisateur;
	private String nom;
	private String prenom;
	private String dateNaissance;
	private String email;
	private String username;
	private String password;

//	@ManyToOne
//	@JoinColumn(name = "id_role", nullable = false)
//	private Role role;

}