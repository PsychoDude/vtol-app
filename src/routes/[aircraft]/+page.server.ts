import {
	getAircraftName,
	getAircraftType,
	checklistStruct,
	emergencyChecklistsStruct
} from '$lib/checklists';
import { getAircraftOnlySlugs } from '$lib/markdown.js';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const list = await getAircraftOnlySlugs();

	return list;
}

export async function load({ params, url }) {
	const aircraftName = getAircraftName(params.aircraft);
	const curacAc = url.searchParams.get('curac');
	const curacName = curacAc ? getAircraftName(curacAc) : '';
	const curac = { aircraft: curacAc, name: curacName };
	const aircraftType = getAircraftType(params.aircraft);

	const checklists: AircraftChecklists = checklistStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];
	const allAircraftEmergChecklists: EmergencyChecklists = emergencyChecklistsStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];

	if (!checklists) error(404, 'Dumbass');

	if (!allAircraftEmergChecklists)
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
		relatedEmergencyChecklists: allAircraftEmergChecklists,
		aircraftName: aircraftName,
		aircraftType: aircraftType
	};
}
