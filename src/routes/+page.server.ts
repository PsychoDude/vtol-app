import { checklistStruct } from '$lib/checklists';
import type { Page } from '$lib/types';

export const prerender = true;

export async function load() {
	const pages: Page[] = [];

	checklistStruct.forEach((checklist) => {
		pages.push({ type: checklist.type, name: checklist.name, aircraft: checklist.aircraft });
	});

	return {
		pages: pages
	};
}
