package com.cda.todolife.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JournalDto {

	private int idJournal;
	private String label;
	private UtilisateurDtoList utilisateur;
	private List<JourDto> jour = new ArrayList<>();
}