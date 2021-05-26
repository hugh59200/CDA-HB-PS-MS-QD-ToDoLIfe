package com.cda.todolife.dto.sport;

import java.util.Date;

import com.cda.todolife.dto.UtilisateurDtoList;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActiviteDto {

	private int idActivite;
	private String label;
	private Date jour;
	private int distance;
	private int elevation;
	private TempsDto temps;
	private TraceDto trace;
	private SportDto sport;
	private UtilisateurDtoList utilisateur;
}
