import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
import { BouttonValider } from './../../bouttons/BouttonValider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mood } from '../../autres/Mood';
import React from 'react';

export function DetailJour(props) {
	return (
		<div className="jourdetails">
			<div className="enteteJour">
				<div className="jourData">
					{props.updateJour && (
						<FontAwesomeIcon
							icon={faArrowAltCircleLeft}
							className="fleche"
							onClick={() => {}}
						/>
					)}
					<Mood moodLevel={props.jourData.humeur} />
					{props.updateJour && (
						<FontAwesomeIcon
							icon={faArrowAltCircleRight}
							className="fleche"
							onClick={() => {}}
						/>
					)}
				</div>
				<div className="titreJour">{props.jourData.titre}</div>
			</div>
			<div className="textJour">
				<p className="jourDataTexte">{props.jourData.texte}</p>
			</div>
			<div className="deuxBoutons">
				<BouttonRevenir
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={props.setajoutJour}
				/>
				{props.updateJour && (
					<BouttonValider
					// setshowList={props.setshowList}
					// setshowJourDetail={props.setshowJourDetail}
					// setajoutJour={props.setajoutJour}
					/>
				)}
			</div>
		</div>
	);
}
