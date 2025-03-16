import { checklistStruct } from '$lib/checklists';
import type { Page } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const pages: Page[] = [];

	checklistStruct.forEach((checklist) => {
		pages.push({ type: checklist.type, name: checklist.name, aircraft: checklist.aircraft });
	});

	if (pages.length <= 0) error(404, 'Data Not Found.');

	return {
		pages: pages
	};
};
