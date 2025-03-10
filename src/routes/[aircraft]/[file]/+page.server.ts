import {
	checklistStruct,
	emergencyChecklistsStruct,
	getChecklistParams,
	getRelatedChecklistsByAircraftAndFile
} from '$lib/checklists';
import type { ChecklistItem, EmergencyChecklists, Related } from '$lib/types';
import { getAircraftSlugs, getMarkdown } from '$lib/markdown';
import { getAircraftName } from '$lib/checklists';
import { getPageName } from '$lib/checklists';

export const prerender = true;

export async function entries() {
	const list = await getAircraftSlugs();

	return list[0];
}

export async function load({ params, url }) {
	const curac = url.searchParams.get('curac');
	const RelatedParams = getChecklistParams(params.file, params.aircraft);
	const aircraftName = getAircraftName(params.aircraft);
	const pageName = getPageName('aircraft', params.file, params.aircraft);
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
