import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

export async function load({ params, fetch }) {
	const response = await fetch(`/checklists/${params.aircraft}/${params.file}.md`);

	if (response.status !== 200) return error(404, 'LOSER');

	const markdownContent = await response.text();
	let html = await marked(markdownContent);

	html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
		return `<img ${attributes} class="w-full h-auto" />`;
	});

	return {
		content: html,
		aircraft: params.aircraft,
		file: params.file
	};
}
