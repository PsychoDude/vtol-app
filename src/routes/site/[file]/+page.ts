import { getSiteSlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const siteFiles = getSiteSlugs();
	if (!siteFiles.some((file) => file.file === params.file)) throw error(404, ' Poo');
};
