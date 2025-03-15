import { getSiteSlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const slugs = getSiteSlugs();
	if (!slugs.find((file) => file.file === params.file)) error(404, 'Page Not Found.');
};
