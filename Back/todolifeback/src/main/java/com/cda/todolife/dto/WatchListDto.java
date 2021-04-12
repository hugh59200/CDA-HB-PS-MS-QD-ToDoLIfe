package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class WatchListDto {

	private int idWatchList;
	private String label;
	private UtilisateurDto utilisateur;
}
