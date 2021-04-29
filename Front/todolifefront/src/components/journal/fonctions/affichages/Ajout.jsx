import { bouttonRevenir } from "../bouttons/bouttons";
import { jourDetails } from "../détail/jourDetails";

export function affichageJour(jourData, setshowList, setshowJourDetail) {
	return <>
		{jourDetails(jourData)}
		{bouttonRevenir(setshowList, setshowJourDetail)}
	</>;
}



