import { getAircraftOnlySlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const aircraft = getAircraftOnlySlugs();
	if (!aircraft.some((plane) => plane.aircraft === params.aircraft)) throw error(404, ' Poo');
};
