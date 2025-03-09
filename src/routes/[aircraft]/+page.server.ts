import { checklistStruct, emergencyChecklistsStruct } from '$lib/checklists';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	const checklists: AircraftChecklists = checklistStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];

	const allAircraftEmergChecklists = emergencyChecklistsStruct.find(
		(checklist) => checklist.aircraft === params.aircraft
	);

	const emergencyLists: EmergencyChecklists | undefined = allAircraftEmergChecklists;

	if (!checklists) error(404, 'Dumbass');

	if (!emergencyLists)
		return {
			aircraft: params.aircraft,
			checklists: checklists,
			aircraftLabel: false
		};

	return {
		aircraft: params.aircraft,
		checklists: checklists,
		emergencyLists: emergencyLists,
		aircraftLabel: false
	};
}
