import { siteChecklistStruct, getAllAircraftNames, checklistStruct } from '$lib/checklists';
import type { Page } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const aircraftNamesList = getAllAircraftNames();
	const sitePages: Array<{ name: string; file: string }> = [];
	const pages: Page[] = [];

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	checklistStruct.forEach((checklist) => {
		pages.push({ type: checklist.type, name: checklist.name, aircraft: checklist.aircraft });
	});

	if (pages.length <= 0) error(404, 'Data Not Found.');

	return {
		pages: pages,
		sitePages: sitePages,
		aircraftNames: aircraftNamesList
	};
};
