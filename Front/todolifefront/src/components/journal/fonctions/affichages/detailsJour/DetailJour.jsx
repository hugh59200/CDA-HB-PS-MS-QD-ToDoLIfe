import React, { useState } from 'react';
import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
	faPen,
} from '@fortawesome/free-solid-svg-icons';

import { BouttonModifier } from './../../bouttons/BouttonModifier';
import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mood } from '../../autres/Mood';

export function DetailJour(props) {
	const [titreUpdate, settitreUpdate] = useState(props.jourData.titre);
	const [moodUpdate, setmoodUpdate] = useState();
	const [resumeUpdate, setresumeUpdate] = useState();

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
					<p>{titreUpdate}</p>
					{props.updateJour && titreUpdate && (
						<FontAwesomeIcon
							icon={faPen}
							className="updateTitre"
							onClick={() => {
								settitreUpdate();
							}}
						/>
					)}
					{props.updateJour && !titreUpdate && (
							<input
								type="text"
								className="inputTitreUpdate"
								id={props.id}
								placeholder= "nouveau titre"
								placeholderTextColor="red"
								// onChange={e => settitreUpdate(e.target.value)}
							></input>
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
