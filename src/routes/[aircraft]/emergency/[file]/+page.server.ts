import {
	getAircraftName,
	getPageName,
	getRelatedEmergencyChecklistsByAircraftAndFile,
	checklistStruct
} from '$lib/checklists.js';
import { getChecklistParams } from '$lib/checklists.js';
import { emergencyChecklistsStruct } from '$lib/checklists.js';
import { getMarkdown } from '$lib/markdown';
import { getEmergencySlugs } from '$lib/markdown';
import type { ChecklistItem, Related } from '$lib/types';
import type { EmergencyChecklists } from '$lib/types';

export const prerender = true;

export async function entries() {
	const list = await getEmergencySlugs();

	return list;
}

export async function load({ params, url }) {
	const curac = url.searchParams.get('curac');
	const RelatedParams = getChecklistParams(params.file, params.aircraft);
	const aircraftName = getAircraftName(params.aircraft);
	const pageName = getPageName('emergency', params.file, params.aircraft);
	const relatedChecklistsNames = getRelatedEmergencyChecklistsByAircraftAndFile(
		params.aircraft,
		params.file
	);

	const markdown = await getMarkdown(url.pathname);

	const relatedChecklists: Array<Related> = [];

	const allAircraftEmergChecklists = emergencyChecklistsStruct.find(
		(checklist) => checklist.aircraft === params.aircraft
	);

	const emergencyLists: EmergencyChecklists | undefined = allAircraftEmergChecklists;

	if (!relatedChecklistsNames && !allAircraftEmergChecklists) {
		return {
			curac: curac,
			content: markdown,
			aircraft: params.aircraft,
			file: params.file,
			aircraftLabel: true,
			pageName: pageName,
			aircraftName: aircraftName,
			relatedParams: RelatedParams
		};
	}

	if (relatedChecklistsNames) {
		const relatedLists: Array<ChecklistItem> = [];

		Object.entries(relatedChecklistsNames).forEach((aircraft) => {
			const relatedFile = aircraft[1];
			console.log(relatedFile);
			if (!relatedFile || !aircraftName) return;

			const allAircraftChecklists = checklistStruct.find(
				(aircraft) => aircraft.aircraft === params.aircraft
			);

			if (allAircraftChecklists) {
				const relatedList = allAircraftChecklists.checklists.find(
					(list) => list.file === relatedFile
				);

				if (relatedList) relatedLists.push(relatedList);
			}
		});

		if (!aircraftName) return;

		relatedChecklists.push({
			aircraft: params.aircraft,
			name: aircraftName,
			checklists: relatedLists
		});
	}
	// console.log(relatedChecklists);
	return {
		curac: curac,
		content: markdown,
		aircraft: params.aircraft,
		file: params.file,
		aircraftLabel: true,
		relatedChecklists: relatedChecklists,
		relatedEmergencyChecklists: emergencyLists,
		pageName: pageName,
		aircraftName: aircraftName,
		relatedParams: RelatedParams
	};
}
