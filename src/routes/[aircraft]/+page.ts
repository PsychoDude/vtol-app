import { getAircraftOnlySlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	console.log('fired');

	const slugs = getAircraftOnlySlugs();
	if (!slugs.find((aircraft) => aircraft.aircraft === params.aircraft))
		error(404, 'Page Not Found.');
};
