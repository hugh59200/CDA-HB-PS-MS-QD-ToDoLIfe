import { BouttonAjouter } from '../../bouttons/BouttonAjouter';
import { EmptyOrList } from './EmptyOrList';
import React from 'react';

export function AffichageListe(props) {
	
	// const [jourExistant, setjourExistant] = useState(false);
	
	// 	axios({
	// 		method: 'get',
	// 		url: API_JOURNAL + '/' + localStorage.getItem('id') + '/utilisateurs',
	// 	}).then(response => {
	// 		const json = response.data;
	// 		if (json.length === 0) {
	// 			setjourExistant(false);
	// 			console.log("ok");
	// 		} else {
	// 			setjourExistant(true);
	// 			console.log("ko");
	// 		}
	// 	});

		

	if (jourExistant === true ) {
		return (
			<>
				<EmptyOrList
					loading={props.loading}
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
				/>
				<BouttonAjouter
					setajoutJour={props.setajoutJour}
					setshowList={props.setshowList}
				/>
			</>
		);
	} else {
			return (
				<>
					<EmptyOrList
						loading={props.loading}
						data={props.data}
						setjourData={props.setjourData}
						setshowList={props.setshowList}
						setshowJourDetail={props.setshowJourDetail}
					/>
				</>
			);
		}
	}