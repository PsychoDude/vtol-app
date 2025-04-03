import { siteChecklistStruct, getAllAircraftNames } from '$lib/checklists';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = () => {
	const sitePages: Array<{ name: string; file: string }> = [];
	const aircraftNames = getAllAircraftNames();

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	return {
		aircraftNames: aircraftNames,
		sitePages: sitePages
	};
};
