import type { HandleServerError } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function handleError(): Promise<HandleServerError> {
	error(404, 'Page Not Found');
}
