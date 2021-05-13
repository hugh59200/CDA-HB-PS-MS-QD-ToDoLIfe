import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
	faPen,
} from '@fortawesome/free-solid-svg-icons';

import { BouttonModifier } from './../../bouttons/BouttonModifier';
import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
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
				<div className="titreJour">
					<p>{props.jourData.titre}</p>
					{props.updateJour && (
						<FontAwesomeIcon
							icon={faPen}
							className="updateTitre"
							onClick={() => {
								props.setupdateJour(true);
							}}
						/>
					)}
				</div>
			</div>
			<div className="textJour">
				<p className="jourDataTexte">{props.jourData.texte}</p>
			</div>
			<div className="deuxBoutons">
				<BouttonRevenir
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={props.setajoutJour}
					setupdateJour={props.setupdateJour}
				/>
				{props.updateJour && (
					<BouttonModifier
					// setupdateJour={props.setupdateJour}
					// setshowList={props.setshowList}
					// setshowJourDetail={props.setshowJourDetail}
					// setajoutJour={props.setajoutJour}
					/>
				)}
			</div>
		</div>
	);
}
