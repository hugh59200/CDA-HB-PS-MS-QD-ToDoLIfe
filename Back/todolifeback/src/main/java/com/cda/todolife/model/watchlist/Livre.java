package com.cda.todolife.model.watchlist;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Livre {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idLivre;
	private String title;
	private int pageActuel;
	private String avis;

	@ManyToOne
	@JoinColumn(name = "id_watch_list", nullable = false)
	private WatchList watchList;
}
