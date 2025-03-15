import { getSiteSlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const slugs = getSiteSlugs();
	if (!slugs.find((file) => file.file === params.file)) throw new Error('Page Not Found.');
};
