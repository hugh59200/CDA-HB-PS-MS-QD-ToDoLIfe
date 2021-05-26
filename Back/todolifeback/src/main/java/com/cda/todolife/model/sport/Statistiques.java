package com.cda.todolife.model.sport;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

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
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "id_utilisateur") })
public class Statistiques {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idStatistiques;
	
	@OneToOne
	@JoinColumn(name = "id_utilisateur", nullable = false)
	private Utilisateur utilisateur;
}
