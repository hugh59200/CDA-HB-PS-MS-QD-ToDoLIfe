

export function HumeurNeg(humeur, setHumeur) {
	if (humeur > 1) {
		setHumeur(humeur - 1);
	}
}

export function HumeurPos(humeur, setHumeur) {
	if (humeur < 4) {
		setHumeur(humeur + 1);
	}
}
