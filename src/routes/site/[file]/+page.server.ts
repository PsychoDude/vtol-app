import { getPageName, getRelatedChecklistsByFile, siteChecklistStruct } from '$lib/checklists';
import { getSiteSlugs } from '$lib/markdown';
import type { SiteItem } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types.js';
import { getMarkdown } from '$lib/markdown';

export const entries: EntryGenerator = () => {
	const list = getSiteSlugs();

	return list;
};

export const prerender = true;

export const load: PageServerLoad = async ({ params, url }) => {
	const pageName = getPageName('site', params.file);

	if (!pageName) throw error(404, 'Page Not Found.');

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
		pageName: pageName
	};
};
