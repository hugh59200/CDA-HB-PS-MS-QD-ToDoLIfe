import React, { useState } from 'react';

import { DetailsJour } from './DetailsJour';
import { UpdateJour } from './UpdateJour';

export function DetailOrUpdateJour(props) {
	const [avertissement, setavertissement] = useState('');
	const [titreUpdateValue, settitreUpdateValue] = useState('');
	const [moodUpdateValue, setmoodUpdateValue] = useState(props.jourData.humeur);
	const [resumeUpdateValue, setresumeUpdateValue] = useState('');

	return (
		<>
			{!props.updateJour && DetailsJour(props)}

			{props.updateJour &&
				UpdateJour(
					moodUpdateValue,
					setmoodUpdateValue,
					avertissement,
					props,
					settitreUpdateValue,
					setresumeUpdateValue,
					titreUpdateValue,
					resumeUpdateValue,
					setavertissement,
				)}
		</>
	);
}