import { checklistStruct, emergencyChecklistsStruct } from '$lib/checklists';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';

interface RouteParams {
	aircraft: string;
}

export const prerender = true;

export async function load({ params }: { params: RouteParams }) {
	const checklists: AircraftChecklists = checklistStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];
	const emergencyChecklists: EmergencyChecklists = emergencyChecklistsStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];

	if (!checklists) error(404, 'Dumbass');

	if (!emergencyChecklists)
		return {
			aircraft: params.aircraft,
			checklists: checklists
		};

	return {
		aircraft: params.aircraft,
		checklists: checklists,
		emergencyLists: emergencyChecklists
	};
}
