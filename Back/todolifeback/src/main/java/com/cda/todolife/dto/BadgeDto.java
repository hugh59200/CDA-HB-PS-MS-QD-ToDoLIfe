package com.cda.todolife.dto;

import com.cda.todolife.model.Sport;

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
	private Sport sport;
	private StatistiquesDto statistiques;
}
