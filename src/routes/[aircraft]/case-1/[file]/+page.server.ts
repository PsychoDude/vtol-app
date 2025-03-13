import {
	getRelatedChecklistsByAircraftAndFile,
	getPageName,
	getAircraftName,
	emergencyChecklistsStruct,
	getChecklistParams,
	checklistStruct,
	siteChecklistStruct,
	getAllAircraftNames
} from '$lib/checklists';
import { getMarkdown, getAircraftSlugs } from '$lib/markdown';
import type { ChecklistItem, Related } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const list = getAircraftSlugs();

	return list[1];
}

export async function load({ params, url }) {
	const aircraftNamesList = getAllAircraftNames();
	const sitePages: Array<{ name: string; file: string }> = [];
	const RelatedParams = getChecklistParams(params.file, params.aircraft);
	const aircraftName = getAircraftName(params.aircraft);
	const pageName = getPageName('aircraft', params.file, params.aircraft);

	if (!aircraftName) error(404, 'Aircraft not found.');
	if (!pageName) error(404, 'Page name not found.');

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	const relatedChecklistsNames = getRelatedChecklistsByAircraftAndFile(
		params.aircraft,
		params.file
	);

	const markdown = await getMarkdown(url.pathname);

	const relatedChecklists: Related[] = [];

	const allAircraftEmergChecklists =
		emergencyChecklistsStruct.find((checklist) => checklist.aircraft === params.aircraft) || [];

	if (!relatedChecklistsNames && !allAircraftEmergChecklists) {
		return {
			content: markdown,
			file: params.file,
			aircraft: params.aircraft,
			pageName: pageName,
			aircraftName: aircraftName,
			relatedParams: RelatedParams
		};
	}

	if (relatedChecklistsNames) {
		Object.entries(relatedChecklistsNames).forEach((aircraft) => {
			const relatedLists: ChecklistItem[] = [];
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
		file: params.file,
		aircraft: params.aircraft,
		relatedChecklists: relatedChecklists,
		relatedEmergencyChecklists: allAircraftEmergChecklists,
		pageName: pageName,
		aircraftName: aircraftName,
		relatedParams: RelatedParams,
		sitePages: sitePages,
		aircraftNames: aircraftNamesList
	};
}
