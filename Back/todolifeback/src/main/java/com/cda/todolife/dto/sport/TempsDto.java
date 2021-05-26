package com.cda.todolife.dto.sport;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TempsDto {

	private int idTemps;

	private int heures;
	private int minutes;
	private int secondes;
}
