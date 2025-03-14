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

export const prerender = true;

export async function entries() {
	const list = getAircraftOnlySlugs();

	return list;
}

export async function load({ params }) {
	const aircraftNamesList = getAllAircraftNames();
	const sitePages: Array<{ name: string; file: string }> = [];
	const aircraftName = getAircraftName(params.aircraft);

	if (!aircraftName) error(404, 'Aircraft not found.');

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	const checklists: AircraftChecklists = checklistStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];

	if (!checklists) error(404, 'No list found.');

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
}
