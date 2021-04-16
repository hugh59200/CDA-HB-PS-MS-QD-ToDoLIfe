package com.cda.todolife.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "todolist")
public class ToDoList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_todolist")
	private int idTodoList;

	private String label;
	
	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "id_utilisateur", nullable = false)
	private Utilisateur utilisateur;

}
