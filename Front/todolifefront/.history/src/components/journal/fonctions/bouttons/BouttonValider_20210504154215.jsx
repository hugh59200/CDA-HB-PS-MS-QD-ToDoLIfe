import React, { useEffect } from 'react';

import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';
import moment from 'moment';

export function BouttonValider(props) {
	const id = localStorage.getItem('id');
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					// props.setajoutJour(false);
					// props.setshowList(true);
					<MyFunctionnalComponent
						titre={props.titre}
						moodInt={props.moodInt}
						resume={props.resume}
						id={id}
						setshowList={props.setshowList}
					/>;
				}}
			>
				valider
			</button>
		</div>
	);
}


function App() {
  // const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
 
    // setData(result.data);
  });
 
  return (
    // <ul>
    //   {data.hits.map(item => (
    //     <li key={item.objectID}>
    //       <a href={item.url}>{item.title}</a>
    //     </li>
    //   ))}
    // </ul>
  );
}

// async function creationJour(props) {
// 	const titre = props.titre;
// 	const humeur = props.moodInt;
// 	const texte = props.resume;
// 	const id = localStorage.getItem('id');
// 	const dateJour = moment(new Date()).format('YYYY-MM-DD');
// 	const jour = {
// 		dateJour,
// 		humeur,
// 		titre,
// 		texte,
// 	};

// 	axios({
// 		method: 'post',
// 		url: API_JOUR,
// 		data: jour,
// 		params: { id },
// 	})
// 		.then(response => {
// 			const status = response.request.status;

// 			if (status === 200) {
// 				console.log('Jour ajouté avec succés !');
// 				// <timeOut time={2000} status={status} setshowList={props.setshowList} />;
// 			}
// 		})
// 		.catch(error => {
// 			console.log('Une erreur est survenue');
// 			// <timeOut time={2000} status={error} setshowList={props.setshowList} />;
// 		});
// 	}
	









	
// 	function timeOut(props) {
// 		props.setshowList(true);
// 		setTimeout(() => {
// 			popUpSuccess(props.status);
// 			console.log('ok');
// 			props.setshowList(true);
// 		}, props.time);
// 	}

// function popUpSuccess(status) {
// 	if (status === 200) {
// 		return ajoutOk();
// 	}
// 	if (status === 409) {
// 		return ajoutKo();
// 	}
// }

// function ajoutOk() {
// 	return <div className="popUpResponse"></div>;
// }

// function ajoutKo() {
// 	return <div className="popUpResponse"></div>;
// }
