package com.cda.todolife.dto;

import java.sql.Time;
import java.util.Date;

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
	private int label;
	private Date jour;
	private Time Temps;
	private int distance;
	private int elevation;
	private TraceDto trace;
	private SportDto sport;
	private UtilisateurDtoList utilisateur;
}
