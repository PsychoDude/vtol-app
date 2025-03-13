import { siteChecklistStruct, getAllAircraftNames, checklistStruct } from '$lib/checklists';
import type { Page } from '$lib/types';

export const prerender = true;

export async function load() {
	const aircraftNamesList = getAllAircraftNames();
	const sitePages: Array<{ name: string; file: string }> = [];
	const pages: Page[] = [];

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	checklistStruct.forEach((checklist) => {
		pages.push({ type: checklist.type, name: checklist.name, aircraft: checklist.aircraft });
	});

	return {
		pages: pages,
		sitePages: sitePages,
		aircraftNames: aircraftNamesList
	};
}
