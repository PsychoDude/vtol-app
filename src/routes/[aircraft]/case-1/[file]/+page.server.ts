import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

export async function load({ params, fetch }) {
	const response = await fetch(`/checklists/${params.aircraft}/case-1/${params.file}.md`);

	if (response.status !== 200) return error(404, 'Dumbass');

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
