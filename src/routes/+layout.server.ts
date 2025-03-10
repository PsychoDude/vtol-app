import { siteChecklistStruct } from '$lib/checklists';
import type { SiteItem } from '$lib/types';

export async function load() {
	const sitePages: Array<SiteItem> = [];
	siteChecklistStruct.forEach((checklist) => sitePages.push(checklist));

	return {
		sitePages: sitePages
	};
}
