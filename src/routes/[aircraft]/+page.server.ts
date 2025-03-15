import {
	getAircraftName,
	checklistStruct,
	emergencyChecklistsStruct,
	getAllAircraftNames,
	siteChecklistStruct
} from '$lib/checklists';
import { getAircraftOnlySlugs } from '$lib/markdown.js';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types.js';

export const entries: EntryGenerator = () => {
	const list = getAircraftOnlySlugs();

	return list;
};

export const prerender = true;
export const ssr = false;

export const load: PageServerLoad = async ({ params }) => {
	try {
		const aircraftNamesList = getAllAircraftNames();
		const sitePages: Array<{ name: string; file: string }> = [];
		const aircraftName = getAircraftName(params.aircraft);

		if (!aircraftName) throw error(404, 'Aircraft Not Found.');

		siteChecklistStruct.forEach((checklist) =>
			sitePages.push({ name: checklist.name, file: checklist.file })
		);

		const checklists: AircraftChecklists = checklistStruct.filter(
			(aircraft) => aircraft.aircraft === params.aircraft
		)[0];

		if (!checklists) throw error(404, 'Lists Not Found.');

		const allAircraftEmergChecklists: EmergencyChecklists = emergencyChecklistsStruct.filter(
			(aircraft) => aircraft.aircraft === params.aircraft
		)[0];

		if (!allAircraftEmergChecklists)
			return {
				aircraft: params.aircraft,
				checklists: checklists,
				aircraftName: aircraftName,
				sitePages: sitePages,
				aircraftNames: aircraftNamesList
			};

		return {
			aircraft: params.aircraft,
			checklists: checklists,
			relatedEmergencyChecklists: allAircraftEmergChecklists,
			aircraftName: aircraftName,
			sitePages: sitePages,
			aircraftNames: aircraftNamesList
		};
	} catch (err) {
		throw err;
	}
};
