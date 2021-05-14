export function BouttonModifier(props) {
	return (
		<button
			className="btn-form"
			onClick={() => {
				handleSubmit(props);
			}}
		>
			modifier
		</button>
	);
}

function handleSubmit(props) {
	if (props.titreUpdateValue.length !== 0) {
		updateJour(props);
	} else {
		props.setavertissement("n'oubliez pas le titre");
	}
}

function updateJour(props) {
	// props.setshowList(true);
	// props.setajoutJour(false);
	// props.setupdateJour(false);
	// const dateJour = '';

	const titre = props.titreUpdateValue;
	// const humeur = props.moodUpdateValue;
	const texte = props.resumeUpdateValue;

	const jour = {
		// dateJour,
		titre,
		// humeur,
		texte,
	};

	console.log(jour.titre);
	console.log(jour.texte);
}
