import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
import { Mood } from '../../autres/Mood';
import React from 'react';

export function DetailsJour(props) {
	return (
		<div className="jourdetails">
			<div className="enteteJour">
				<div className="jourData">
					<Mood moodLevel={props.jourData.humeur} />
				</div>
				<div className="titreJour">
					<p>{props.jourData.titre}</p>
				</div>
			</div>
			<div className="textJour">
				<p className="jourDataTexte">{props.jourData.texte}</p>
			</div>
			<div className="unBouton">
				<BouttonRevenir
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={props.setajoutJour}
					setupdateJour={props.setupdateJour} />
			</div>
		</div>
	);
}
