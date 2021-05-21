package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BadgeDto {

	private int idBadge;
	private String label;
	private SportDto sport;
	private StatistiquesDto statistiques;
}
