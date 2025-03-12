import { getPageName, getRelatedChecklistsByFile, siteChecklistStruct } from '$lib/checklists';
import { getMarkdown, getSiteSlugs } from '$lib/markdown';
import type { SiteItem } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const list = getSiteSlugs();

	return list;
}

export async function load({ params, url }) {
	const pageName = getPageName('site', params.file);

	if (!pageName) error(404, 'No page name found.');

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
		siteBtn: true,
		pageName: pageName
	};
}
