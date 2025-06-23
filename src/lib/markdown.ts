import { marked } from 'marked';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function getMarkdown(urlPath: string) {
	const pathname = path.resolve(`src/checklists/${urlPath}.md`);
	try {
		const markdown = await fs.readFile(pathname, 'utf-8');

		let html = await marked(markdown);

		html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
			return `<img ${attributes} class="w-full h-auto" />`;
		});

		return html;
	} catch (err) {
		console.error('Error reading file:', err);
		return null;
	}
}
