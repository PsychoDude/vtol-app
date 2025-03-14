import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	return error(404, 'Not Found.');
};
