package com.cda.todolife.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

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
@ToString(of = { "label" })
public class Journal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idJournal;
	private String label;

	@OneToOne
	@JoinColumn(name = "id_utilisateur", nullable = false, unique = true)
	private Utilisateur utilisateur;

	@OneToMany(mappedBy = "journal", cascade = CascadeType.ALL)
	private List<Jour> jour = new ArrayList<>();
}
