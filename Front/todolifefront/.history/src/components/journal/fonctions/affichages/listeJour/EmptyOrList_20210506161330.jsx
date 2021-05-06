import React, { useEffect } from 'react';

import Empty from '../../autres/Empty';
import { ListerJour } from './ListerJour';

export function EmptyOrList(props) {

	useEffect(() => {
  }, [props]);
	
	return <div className="journalItem">
		{props.loading ? (
			<Empty />
		) : (
			<ListerJour
				data={props.data}
				setjourData={props.setjourData}
				setshowList={props.setshowList}
				setshowJourDetail={props.setshowJourDetail} />
		)}
	</div>;
}