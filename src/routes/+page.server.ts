import { checklistStruct } from '$lib/checklists';
import type { AircraftChecklists } from '$lib/types';

export const prerender = true;

export async function load() {
	const pages: Array<AircraftChecklists> = [];

	checklistStruct.forEach((checklist) => {
		pages.push(checklist);
	});

	return {
		pages: pages
	};
}
