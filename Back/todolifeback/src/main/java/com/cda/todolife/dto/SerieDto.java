package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SerieDto {

	private int idSerie;
	private String name;
	private int saison;
	private int episode;
	private WatchListDto watchListDto;
}
