import type { HandleServerError } from '@sveltejs/kit';

export function handleError({ error, event, status, message }) {
	console.log(status);
	return { message: 'test' };
}
