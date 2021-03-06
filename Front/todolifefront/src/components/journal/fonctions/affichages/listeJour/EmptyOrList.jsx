import Empty from '../../autres/Empty';
import { ListerJour } from './ListerJour';
import React from 'react';

export function EmptyOrList(props) {
	return (
		<div className="journalItem">
			{props.loading ? (
				<Empty />
			) : (
				<ListerJour
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setupdateJour={props.setupdateJour}
					setdateUpdatevalue={props.setdateUpdatevalue}
				/>
			)}
		</div>
	);
}
