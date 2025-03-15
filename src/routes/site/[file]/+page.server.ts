import {
	getPageName,
	getRelatedChecklistsByFile,
	siteChecklistStruct,
	getAllAircraftNames
} from '$lib/checklists';
import { getSiteSlugs } from '$lib/markdown';
import type { SiteItem } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types.js';
import { marked } from 'marked';

export const entries: EntryGenerator = () => {
	const list = getSiteSlugs();

	return list;
};

export const prerender = true;

export const load: PageServerLoad = async ({ params, url, fetch }) => {
	const aircraftNamesList = getAllAircraftNames();
	const sitePages: Array<{ name: string; file: string }> = [];
	const pageName = getPageName('site', params.file);

	// if (!pageName) throw error(404, 'Page Not Found.');

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	const relatedChecklistsNames = getRelatedChecklistsByFile(params.file);
	const relatedChecklists: Array<SiteItem> = [];

	Object.entries(relatedChecklistsNames).forEach((checklist) => {
		const name = checklist[1];
		const siteList = siteChecklistStruct.find((list) => list.file === name);

		if (siteList) relatedChecklists.push(siteList);
	});

	let res = await fetch(`/src/checklists${url.pathname}.md`);

	if (res.status === 404) error(404, 'Page Not Found');

	let html = await res.text();
	html = html.replace(/<img([^>]*?)>/g, (match: any, attributes: any) => {
		return `<img ${attributes} class="w-full h-auto" />`;
	});

	const markdown = await marked(html);

	return {
		type: 'site',
		content: markdown,
		relatedChecklists: relatedChecklists,
		pageName: pageName,
		sitePages: sitePages,
		aircraftNames: aircraftNamesList
	};
};
