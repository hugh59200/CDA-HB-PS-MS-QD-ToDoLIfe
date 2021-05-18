package com.cda.todolife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Sport {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idSport;
	
	private String label;
}
