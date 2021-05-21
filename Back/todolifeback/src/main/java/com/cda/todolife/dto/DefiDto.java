package com.cda.todolife.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DefiDto {

	private int idDefi;
	private String label;
	private Date debut;
	private Date fin;
	private int pourcentage;
	private SportDto sport;
	private UtilisateurDtoList utilisateur;
}
