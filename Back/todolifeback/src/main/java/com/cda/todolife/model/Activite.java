package com.cda.todolife.model;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
public class Activite {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idActivite;
	
	private int label;
	private Date jour;
	private Time Temps;
	private int distance;
	private int elevation;
	
	@OneToOne
	@JoinColumn(name = "id_trace", nullable = true)
	private Trace trace;
	
	@OneToOne
	@JoinColumn(name = "id_sport", nullable = false)
	private Sport sport;
	
	@OneToOne
	@JoinColumn(name = "id_utilisateur", nullable = false)
	private Utilisateur utilisateur;
}
