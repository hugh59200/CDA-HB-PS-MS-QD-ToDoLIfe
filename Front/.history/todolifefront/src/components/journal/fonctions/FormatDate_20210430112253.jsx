import React from 'react';

export function formatDate(date) {
	var options = { weekday: 'long', month: 'long', day: 'numeric' };
	const dateStr = new Date(date).toLocaleDateString('fr-FR', options);
	return <>{dateStr}</>;
}

export function moisActuel(date) {
	var options = { month: 'long'};
	const moisActuel = new Intl.DateTimeFormat('fr', options).format(new Date())
	return <>{dateStr}</>;
}