import type { HandleClientError } from '@sveltejs/kit';

export function handleError({ error, event, status, message }) {
	console.log(status);
	return { message: 'test' };
}
