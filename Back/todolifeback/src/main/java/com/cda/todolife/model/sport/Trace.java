package com.cda.todolife.model.sport;

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
public class Trace {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idTrace;
	
	private String label;
}
