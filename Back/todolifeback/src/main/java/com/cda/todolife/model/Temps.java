package com.cda.todolife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Temps {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idTemps;
	
	private int heures;
	
	@Min(0)
	@Max(59)
	private int minutes;
	
	@Min(0)
	@Max(59)
	private int secondes;
}
