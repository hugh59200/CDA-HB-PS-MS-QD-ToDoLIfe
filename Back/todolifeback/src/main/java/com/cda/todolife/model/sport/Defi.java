package com.cda.todolife.model.sport;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.cda.todolife.model.Utilisateur;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
	public class Defi {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idDefi;
	
	private String label;
	
	private Date debut;
	
	private Date fin;
	
	@Min(0)
	@Max(100)
	private int pourcentage;

	@OneToOne
	@JoinColumn(name = "id_sport", nullable = false)
	private Sport sport;
	
	@OneToOne
	@JoinColumn(name = "id_utilisateur", nullable = false)
	private Utilisateur utilisateur;
}
