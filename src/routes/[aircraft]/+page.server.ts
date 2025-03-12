import { getAircraftName, checklistStruct, emergencyChecklistsStruct } from '$lib/checklists';
import { getAircraftOnlySlugs } from '$lib/markdown.js';
import type { AircraftChecklists, EmergencyChecklists } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const list = getAircraftOnlySlugs();

	return list;
}

export async function load({ params, url }) {
	const aircraftName = getAircraftName(params.aircraft);

	if (!aircraftName) error(404, 'Aircraft not found.');

	const curacAc = url.searchParams.get('curac') || undefined;
	const curacName = curacAc ? getAircraftName(curacAc) : undefined;
	const curac = { aircraft: curacAc, name: curacName };

	const checklists: AircraftChecklists = checklistStruct.filter(
		(aircraft) => aircraft.aircraft === params.aircraft
	)[0];

	if (!checklists) error(404, 'No list found.');

	const allAircraftEmergChecklists: EmergencyChecklists =
		emergencyChecklistsStruct.filter((aircraft) => aircraft.aircraft === params.aircraft)[0] || [];

	if (!allAircraftEmergChecklists)
		return {
			curac: curac,
			aircraft: params.aircraft,
			checklists: checklists,
			aircraftName: aircraftName
		};

	return {
		curac: curac,
		aircraft: params.aircraft,
		checklists: checklists,
		relatedEmergencyChecklists: allAircraftEmergChecklists,
		aircraftName: aircraftName
	};
}
