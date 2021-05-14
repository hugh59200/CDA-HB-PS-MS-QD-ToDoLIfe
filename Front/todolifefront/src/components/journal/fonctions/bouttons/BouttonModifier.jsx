export function BouttonModifier(props) {
	const dateJour = '';
	const titre = props.titreUpdateValue;
	const humeur = props.moodUpdateValue;
	const texte = props.resumeUpdateValue;
	
	const jour = {
		dateJour,
		titre,
		humeur,
		texte,
	};
	
	return (
		<button
			className="btn-form"
			onClick={() => {
				handleSubmit(props, jour);
			}}
		>
			modifier
		</button>
	);

	function handleSubmit(props, jour) {
		console.log(props.settitreUpdateValue.length);
		if (props.settitreUpdateValue.length > 1) {
			console.log("ok");
			// props.setshowList(true);
			// props.setajoutJour(false);
			// props.setupdateJour(false);
			updateJour(jour);
		} else {
			props.setavertissement("n'oubliez pas le titre")
		}
	}
}

function updateJour(jour) {
	console.log(jour);
}