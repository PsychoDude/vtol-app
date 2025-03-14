import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../[aircraft]/$types';

export const prerender = false;

export const load: PageServerLoad = async () => {
	return error(404, 'Not Found.');
};
