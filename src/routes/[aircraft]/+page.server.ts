import {
	getAircraftName,
	checklistStruct,
	emergencyChecklistsStruct,
	getAircraftOnlySlugs
} from '$lib/checklists';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types.js';

export const entries: EntryGenerator = () => {
	const list = getAircraftOnlySlugs();

	return list;
};

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const aircraftName = getAircraftName(params.aircraft);

	if (!aircraftName) throw error(404, 'Aircraft Not Found.');

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
			aircraftName: aircraftName
		};

	return {
		aircraft: params.aircraft,
		checklists: checklists,
		relatedEmergencyChecklists: allAircraftEmergChecklists,
		aircraftName: aircraftName
	};
};
