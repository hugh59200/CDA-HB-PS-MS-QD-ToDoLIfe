package com.cda.todolife.dto;

import com.cda.todolife.model.WatchList;

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
	private WatchList watchList;
}
