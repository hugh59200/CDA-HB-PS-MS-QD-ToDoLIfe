package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class FilmDto {

	private int idFilm;
	private String name;
	private WatchListDto watchListDto;
	private String avis;
	private String moment;
}
