import { getEmergencySlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const aircraft = getEmergencySlugs();
	if (!aircraft.filter((slugs) => slugs.file === params.file)) throw error(404, ' Poo');
};
