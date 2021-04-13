package com.cda.todolife.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_utilisateur")
	private int idUtilisateur;

	private String nom;
	private String prenom;
	
	@Column(name = "date_naissance")
	private Date dateNaissance;

	private String email;
	private String username;
	private String password;

	@ManyToOne
	private Role role;

}
