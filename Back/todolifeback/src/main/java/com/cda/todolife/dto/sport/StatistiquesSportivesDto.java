package com.cda.todolife.dto.sport;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StatistiquesSportivesDto {

	private int idStatistiquesSportives;
	private int MoyenneSemaine;
	private SportDto sport;
	private StatistiquesDto statistiques;
}
