package com.cda.todolife.dto.routine;

import com.cda.todolife.dto.UtilisateurDtoList;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SoirDto {
	private int idElemSoir;
	private int heure;
	private String texte;
	private UtilisateurDtoList utilisateurDtoList;

}
