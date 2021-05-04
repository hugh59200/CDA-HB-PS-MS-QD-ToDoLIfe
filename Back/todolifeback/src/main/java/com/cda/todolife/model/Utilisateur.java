package com.cda.todolife.model;

import java.io.Serializable;
import java.sql.Date;

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
import lombok.ToString;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(of = { "nom", "prenom", "dateNaissance", "email" })
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "email"), @UniqueConstraint(columnNames = "username") })
public class Utilisateur implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idUtilisateur;
	private String nom;
	private String prenom;
	private Date dateNaissance;
	private String email;
	private String username;
	private String password;

//	@ManyToOne
//	@JoinColumn(name = "id_role", nullable = false)
//	private Role role;

}
