package com.cda.todolife.dto.routine;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MatinDto {
	private int idElemMatin;
	private int heure;
	private String texte;
}
