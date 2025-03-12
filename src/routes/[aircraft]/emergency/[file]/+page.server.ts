import {
	getAircraftName,
	getPageName,
	getRelatedEmergencyChecklistsByAircraftAndFile,
	checklistStruct,
	getChecklistParams,
	emergencyChecklistsStruct
} from '$lib/checklists.js';
import { getMarkdown, getEmergencySlugs } from '$lib/markdown';
import type { ChecklistItem, Related } from '$lib/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const list = getEmergencySlugs();

	return list;
}

export async function load({ params, url }) {
	const RelatedParams = getChecklistParams(params.file, params.aircraft);
	const aircraftName = getAircraftName(params.aircraft);
	const pageName = getPageName('emergency', params.file, params.aircraft);

	if (!aircraftName) error(404, 'Aircraft not found.');
	if (!pageName) error(404, 'Page name not found.');

	const curacAc = url.searchParams.get('curac') || undefined;
	const curacName = curacAc ? getAircraftName(curacAc) : '';
	const curac = { aircraft: curacAc, name: curacName };

	const relatedChecklistsNames = getRelatedEmergencyChecklistsByAircraftAndFile(
		params.aircraft,
		params.file
	);

	const markdown = await getMarkdown(url.pathname);

	const relatedChecklists: Related[] = [];

	const allAircraftEmergChecklists =
		emergencyChecklistsStruct.find((checklist) => checklist.aircraft === params.aircraft) || [];

	if (!relatedChecklistsNames && !allAircraftEmergChecklists) {
		return {
			curac: curac,
			content: markdown,
			file: params.file,
			aircraft: params.aircraft,
			pageName: pageName,
			aircraftName: aircraftName,
			relatedParams: RelatedParams
		};
	}

	if (relatedChecklistsNames) {
		const relatedLists: Array<ChecklistItem> = [];

		Object.entries(relatedChecklistsNames).forEach((aircraft) => {
			const relatedFile = aircraft[1];

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

	return {
		curac: curac,
		content: markdown,
		file: params.file,
		aircraft: params.aircraft,
		relatedChecklists: relatedChecklists,
		relatedEmergencyChecklists: allAircraftEmergChecklists,
		pageName: pageName,
		aircraftName: aircraftName,
		relatedParams: RelatedParams
	};
}
