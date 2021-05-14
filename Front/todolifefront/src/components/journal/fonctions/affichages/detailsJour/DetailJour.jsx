import React, { useState } from 'react';
import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import { BouttonModifier } from './../../bouttons/BouttonModifier';
import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mood } from '../../autres/Mood';

export function DetailJour(props) {
	const [avertissement, setavertissement] = useState();
	const [titreUpdateValue, settitreUpdateValue] = useState();
	const [moodUpdateValue, setmoodUpdateValue] = useState();
	const [resumeUpdateValue, setresumeUpdateValue] = useState();

	if (!props.updateJour) {
		return (
			<div className="jourdetails">
				<div className="enteteJour">
					<div>
						<Mood moodLevel={props.jourData.humeur} className="jourData" />
					</div>
					<div className="titreJour">
						<p>{props.jourData.titre}</p>
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
				</div>
			</div>
		);
	} else if (props.updateJour) {
		return (
			<div className="jourdetails">
				<div className="enteteJour">
					<div className="jourData">
						<FontAwesomeIcon
							icon={faArrowAltCircleLeft}
							className="fleche"
							onClick={() => {}}
						/>
						<Mood moodLevel={props.jourData.humeur} />
						<FontAwesomeIcon
							icon={faArrowAltCircleRight}
							className="fleche"
							onClick={() => {}}
						/>
					</div>
					<div className="titreJour">
						<span>{avertissement}</span>
						<input
							type="text"
							className="inputTitreUpdate"
							id={props.id}
							placeholder={props.jourData.titre}
							placeholderTextColor="red"
							onChange={e => settitreUpdateValue(e.target.value)}
						></input>
					</div>
				</div>
				<div className="textJour">
					<div className="choixResume">
						<textarea
							name=""
							cols="30"
							rows="10"
							placeholder={props.jourData.texte}
							// onChange={e => props.setresumeUpdateValue(e.target.value)}
						></textarea>
					</div>
				</div>
				<div className="deuxBoutons">
					<BouttonRevenir
						setshowList={props.setshowList}
						setshowJourDetail={props.setshowJourDetail}
						setajoutJour={props.setajoutJour}
						setupdateJour={props.setupdateJour}
					/>
					<BouttonModifier
						titreUpdateValue={titreUpdateValue}
						moodUpdateValue={moodUpdateValue}
						resumeUpdateValue={resumeUpdateValue}
						setupdateJour={props.setupdateJour}
						setshowList={props.setshowList}
						setshowJourDetail={props.setshowJourDetail}
						setajoutJour={props.setajoutJour}
						settitreUpdateValue={settitreUpdateValue}
						setavertissement={setavertissement}
					/>
				</div>
			</div>
		);
	}
}
