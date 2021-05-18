package com.cda.todolife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@OnDelete(action = OnDeleteAction.CASCADE)
@ToString(of = { "idJournal", "utilisateur" })
public class Journal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idJournal;

	@JsonIgnore
	@OneToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "id_utilisateur", unique = true)
	private Utilisateur utilisateur;

}
