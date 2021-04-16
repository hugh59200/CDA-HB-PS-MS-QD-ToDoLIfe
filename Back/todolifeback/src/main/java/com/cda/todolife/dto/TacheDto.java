package com.cda.todolife.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TacheDto {

	private int idTache;
	private String label;
	private boolean donne;
	private byte priorite;
	private ToDoListDto list;
}
