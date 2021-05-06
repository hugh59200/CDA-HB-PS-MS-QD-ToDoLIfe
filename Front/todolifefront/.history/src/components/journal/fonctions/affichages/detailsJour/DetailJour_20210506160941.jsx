import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
import { Mood } from '../../autres/Mood';
import React from 'react';

export function DetailJour(props) {

	useEffect(() => {
  }, [props]);
	
	return (
		<>
			<div className="jourdetails">
				<div className="enteteJour">
					<div className="jourData">
						<Mood moodLevel={props.jourData.humeur} />
					</div>
					<div className="titreJour">{props.jourData.titre}</div>
				</div>
				<div className="textJour">
					<p className="jourDataTexte">{props.jourData.texte}</p>
				</div>
				<BouttonRevenir
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={props.setajoutJour}
				/>
			</div>
		</>
	);
}