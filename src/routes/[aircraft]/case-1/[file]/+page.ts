import { getAircraftSlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const aircraft = getAircraftSlugs();
	if (!aircraft[1].find((slug) => slug.file === params.file)) throw error(404, ' Poo');
};
