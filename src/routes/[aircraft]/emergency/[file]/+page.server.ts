import { getAircraftName, getPageName } from '$lib/checklists.js';
import { getChecklistParams } from '$lib/checklists.js';
import { checklistStruct, getRelatedChecklistsByAircraftAndFile } from '$lib/checklists.js';
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
	const RelatedParams = getChecklistParams(params.file, params.aircraft);
	const aircraftName = getAircraftName(params.aircraft);
	const pageName = getPageName('emergency', params.file, params.aircraft);
	const relatedChecklistsNames = getRelatedChecklistsByAircraftAndFile(
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
		Object.entries(relatedChecklistsNames).forEach((aircraft) => {
			const relatedLists: Array<ChecklistItem> = [];
			const aircraftAircraft = aircraft[0];
			const relatedNameArr = aircraft[1] as Array<string>;
			const aircraftName = checklistStruct.find(
				(aircraft) => aircraft.aircraft === aircraftAircraft
			)!.name;

			if (!relatedNameArr) return;

			for (let i = 0; i < relatedNameArr.length; i++) {
				const relatedFileName = relatedNameArr[i];
				const allAircraftChecklists = checklistStruct.find(
					(aircraft) => aircraft.aircraft === aircraftAircraft
				);

				if (allAircraftChecklists !== undefined) {
					const relatedList = allAircraftChecklists.checklists.find(
						(checklist) => checklist.file === relatedFileName
					);

					if (relatedList !== undefined) {
						relatedLists.push(relatedList);
					}
				}
			}

			relatedChecklists.push({
				aircraft: aircraftAircraft,
				name: aircraftName,
				checklists: relatedLists
			});
		});
	}

	return {
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
