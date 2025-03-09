import {
	checklistStruct,
	emergencyChecklistsStruct,
	getRelatedChecklistsByAircraftAndFile
} from '$lib/checklists';
import type { ChecklistItem, EmergencyChecklists, Related } from '$lib/types';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

export async function load({ params, fetch }) {
	const relatedChecklistsNames = getRelatedChecklistsByAircraftAndFile(
		params.aircraft,
		params.file
	);
	const response = await fetch(`/checklists/${params.aircraft}/${params.file}.md`);

	if (response.status !== 200) return error(404, 'Dumbass');

	const markdownContent = await response.text();
	let html = await marked(markdownContent);

	html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
		return `<img ${attributes} class="w-full h-auto" />`;
	});

	const relatedChecklists: Array<Related> = [];

	const allAircraftEmergChecklists = emergencyChecklistsStruct.find(
		(checklist) => checklist.aircraft === params.aircraft
	);

	const emergencyLists: EmergencyChecklists | undefined = allAircraftEmergChecklists;

	if (!relatedChecklistsNames && !allAircraftEmergChecklists) {
		console.log('simple return');
		return {
			content: html,
			aircraft: params.aircraft,
			file: params.file
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
	console.log('advanced return');

	return {
		content: html,
		aircraft: params.aircraft,
		file: params.file,
		relatedChecklists: relatedChecklists,
		relatedEmergencyChecklists: emergencyLists
	};
}
