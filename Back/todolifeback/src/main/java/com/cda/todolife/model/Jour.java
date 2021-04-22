package com.cda.todolife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(of = { "titre", "dateJour", "texte" })
@Entity
public class Jour {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idJour;
	private String dateJour;
	private int humeur;
	private String titre;
	private String texte;

	@ManyToOne
//	@JoinColumn(name = "id_journal", nullable = false)
	@JsonIgnore
	private Journal journal;
}