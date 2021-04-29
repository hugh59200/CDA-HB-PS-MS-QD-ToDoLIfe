import React from 'react';

export function monJournal(ChoixDate, fetchUrl, annee, mois, allmonth, allyear, affichage) {
	return <div>
		<h2 className="titreJournal">Mon journal</h2>
		<div className="monJournal">
			{ChoixDate(fetchUrl, annee, mois, allmonth, allyear)}
			{affichage()}
		</div>
	</div>;
}
