import { checklistStruct } from '$lib/checklists';
import type { AircraftChecklists } from '$lib/types';

export const prerender = true;

export async function load() {
	const aircraft: Array<AircraftChecklists> = [];
	const globalPages: Array<AircraftChecklists> = [];

	checklistStruct.forEach((checklist) => {
		if (checklist.aircraft === 'global' || checklist.aircraft === 'carrier') {
			globalPages.push(checklist);
		} else {
			aircraft.push(checklist);
		}
	});

	return {
		aircraft: aircraft,
		globalPages: globalPages
	};
}
