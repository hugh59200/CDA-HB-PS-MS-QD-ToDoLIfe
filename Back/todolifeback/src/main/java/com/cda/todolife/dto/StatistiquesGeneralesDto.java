package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StatistiquesGeneralesDto {

	private int idStatistiquesGenerales;
	private int taille;
	private int poids;
	private int age;
	private int IMC;
	private StatistiquesDto statistiques;
}
