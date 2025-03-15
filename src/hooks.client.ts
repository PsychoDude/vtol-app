import type { HandleClientError } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function handleError(): Promise<HandleClientError> {
	error(404, 'Page Not Found');
}
