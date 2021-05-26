package com.cda.todolife.model.sport;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class StatistiquesSportives {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idStatistiquesSportives;
	
	private int MoyenneSemaine;
	
	@ManyToOne
	@JoinColumn(name = "id_sport", nullable = false)
	private Sport sport;
	
	@OneToOne
	@JoinColumn(name = "id_statistique", nullable = false)
	private Statistiques statistiques;
}
