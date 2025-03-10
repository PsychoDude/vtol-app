import { getAircraftName, getAircraftType } from '$lib/checklists';
import { checklistStruct, emergencyChecklistsStruct } from '$lib/checklists';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params, url }) {
	const curac = url.searchParams.get('curac');
	const aircraftName = getAircraftName(params.aircraft);
	const aircraftType = getAircraftType(params.aircraft);

	const checklists: AircraftChecklists = checklistStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];
	const emergencyChecklists: EmergencyChecklists = emergencyChecklistsStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];

	if (!checklists) error(404, 'Dumbass');

	if (!emergencyChecklists)
		return {
			curac: curac,
			aircraft: params.aircraft,
			checklists: checklists,
			aircraftName: aircraftName,
			aircraftType: aircraftType
		};

	return {
		curac: curac,
		aircraft: params.aircraft,
		checklists: checklists,
		emergencyLists: emergencyChecklists,
		aircraftName: aircraftName,
		aircraftType: aircraftType
	};
}
