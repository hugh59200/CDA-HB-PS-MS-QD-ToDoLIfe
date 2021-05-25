package com.cda.todolife.dto.routine;

import javax.persistence.Entity;

import com.cda.todolife.model.Utilisateur;
import com.cda.todolife.model.routine.Matin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MatinDto {

	private int idElemMatin;
	private int heure;
	private String texte;
	
}
