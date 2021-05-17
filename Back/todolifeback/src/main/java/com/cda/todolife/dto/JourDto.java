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
@ToString(of = { "dateJour", "humeur", "titre" , "texte" })
public class JourDto {

	private int idJour;
	private String dateJour;
	private int humeur;
	private String titre;
	private String texte;
	private String token;
	private JournalDto journalDto;
}