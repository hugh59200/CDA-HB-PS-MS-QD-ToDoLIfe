package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(of = { "titre", "dateJour", "texte" })
public class JourDto {

	private int idJour;
	private String dateJour;
	private int humeur;
	private String titre;
	private String texte;
	private JournalDto journalDto;
}