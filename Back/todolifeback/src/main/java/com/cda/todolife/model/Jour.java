package com.cda.todolife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Jour {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idJour;
	private String dateJour;
	private String humeur;
	private String titre;
	private String texte;

	@ManyToOne
	@JoinColumn(name = "id_journal", nullable = false)
	private Journal journal;

}
