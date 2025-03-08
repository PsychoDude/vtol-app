import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

export async function load({ params, fetch }) {
	// Fetch the markdown content based on the route parameters

	const response = await fetch(`/checklists/${params.aircraft}/emergency/${params.file}.md`);
	console.log(response);
	if (response.status !== 200) return error(404, 'LOSER');
	const markdownContent = await response.text();
	const html = await marked(markdownContent);

	return {
		content: html,
		aircraft: params.aircraft,
		file: params.file
	};
}
