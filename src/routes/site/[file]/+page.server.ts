import {
	getPageName,
	getRelatedChecklistsByFile,
	siteChecklistStruct,
	getAllAircraftNames
} from '$lib/checklists';
import { getMarkdown, getSiteSlugs } from '$lib/markdown';
import type { SiteItem } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types.js';

export const entries: EntryGenerator = () => {
	const list = getSiteSlugs();

	return list;
};

export const prerender = true;
export const ssr = false;

export const load: PageServerLoad = async ({ params, url }) => {
	const aircraftNamesList = getAllAircraftNames();
	const sitePages: Array<{ name: string; file: string }> = [];
	const pageName = getPageName('site', params.file);

	if (!pageName) error(404, 'Page Not Found.');

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

	const markdown = await getMarkdown(url.pathname);

	return {
		type: 'site',
		content: markdown,
		relatedChecklists: relatedChecklists,
		pageName: pageName,
		sitePages: sitePages,
		aircraftNames: aircraftNamesList
	};
};
