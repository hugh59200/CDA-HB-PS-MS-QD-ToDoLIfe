package com.cda.todolife.model.sport;

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
public class Badge {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idBadge;
	
	private String label;

	@OneToOne
	@JoinColumn(name = "id_sport", nullable = false)
	private Sport sport;
	
	@OneToOne
	@JoinColumn(name = "id_statistiques", nullable = false)
	private Statistiques statistiques;
}
