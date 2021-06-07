package com.cda.todolife.dto.watchlist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class LivreDto {

	private int idLivre;
	private String title;
	private int pageActuel;
	private String avis;

	private WatchListDto watchListDto;
}
