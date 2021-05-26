package com.cda.todolife.dto.sport;

import com.cda.todolife.dto.UtilisateurDtoList;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StatistiquesDto {

	private int idStatistiques;
	private UtilisateurDtoList utilisateur;
}
