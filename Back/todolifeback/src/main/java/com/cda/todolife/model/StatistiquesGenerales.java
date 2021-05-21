package com.cda.todolife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "id_statistique") })
public class StatistiquesGenerales {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idStatistiquesGenerales;
	
	private int taille;
	private int poids;
	private int age;
	private int IMC;
	
	@OneToOne
	@JoinColumn(name = "id_statistique", nullable = false)
	private Statistiques statistiques;
}
