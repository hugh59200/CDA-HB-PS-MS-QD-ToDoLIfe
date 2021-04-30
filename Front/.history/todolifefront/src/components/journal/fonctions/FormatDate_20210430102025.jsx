import React from 'react';

export function formatDate(date) {
	var options = { weekday: 'long', month: 'long', day: 'numeric' };
	const dateStr = new Date(date).toLocaleDateString('fr-FR', options);
	return <>{dateStr}</>;
}
