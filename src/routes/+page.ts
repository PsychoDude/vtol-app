import { page } from '$app/state';
import { getSiteSlugs } from '$lib/markdown';
import { error } from '@sveltejs/kit';

export const load = () => {
	if (page.error?.message) throw error(404, ' Poo');
};
