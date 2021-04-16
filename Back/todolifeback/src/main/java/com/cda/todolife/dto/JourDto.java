package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JourDto {

	private int idJour;
	private String dateJour;
	private int humeur;
	private String titre;
	private String texte;
	private JournalDto journalDto;
}