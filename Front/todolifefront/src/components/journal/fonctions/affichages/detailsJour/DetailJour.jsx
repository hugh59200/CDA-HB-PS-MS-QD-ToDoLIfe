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
	const [titreUpdate, settitreUpdate] = useState(false);
	const [titreUpdateValue, settitreUpdateValue] = useState(
		props.jourData.titre,
	);
	const [moodUpdateValue, setmoodUpdateValue] = useState();
	const [resumeUpdate, setresumeUpdate] = useState(false);
	const [resumeUpdateValue, setresumeUpdateValue] = useState();

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
					{props.updateJour && !titreUpdate && (
						<>
							<p>{titreUpdateValue}</p>
							<FontAwesomeIcon
								icon={faPen}
								className="updateTitre"
								onClick={() => {
									settitreUpdate(true);
								}}
							/>
						</>
					)}
					{props.updateJour && titreUpdate && (
						<input
							type="text"
							className="inputTitreUpdate"
							id={props.id}
							placeholder="nouveau titre"
							placeholderTextColor="red"
							onChange={e => settitreUpdateValue(e.target.value)}
						></input>
					)}
				</div>
			</div>
			<div className="textJour">
				{props.updateJour && !resumeUpdate && (
					<p
						className="jourDataTexte"
						onClick={() => {
							setresumeUpdate(true);
						}}
					>
						{props.jourData.texte}
					</p>
				)}
				{props.updateJour && resumeUpdate && (
					<div className="choixResume">
						<textarea
							name=""
							cols="30"
							rows="10"
							placeholder="Alors cette journée ?"
							onChange={e => props.setresumeUpdateValue(e.target.value)}
						></textarea>
					</div>
				)}
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
						titreUpdateValue={titreUpdateValue}
						moodUpdateValue={moodUpdateValue}
						resumeUpdateValue={resumeUpdateValue}
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
