import { checklistStruct } from '$lib/checklists';
import { getRelatedChecklistsByAircraftAndFile } from '$lib/checklists';
import type { ChecklistItem } from '$lib/types';
import type { Related } from '$lib/types';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

export async function load({ params, fetch }) {
	const relatedChecklistsNames = getRelatedChecklistsByAircraftAndFile('global', params.file);

	const response = await fetch(`/checklists/site/${params.file}.md`);

	if (response.status !== 200) return error(404, 'Dumbass');

	const markdownContent = await response.text();
	let html = await marked(markdownContent);

	html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
		return `<img ${attributes} class="w-full h-auto" />`;
	});

	const relatedChecklists: Array<Related> = [];

	if (relatedChecklistsNames) {
		Object.entries(relatedChecklistsNames).forEach((aircraft) => {
			const relatedLists: Array<ChecklistItem> = [];
			const relatedNameArr = aircraft[1] as Array<string>;
			const aircraftName = 'global';

			if (!relatedNameArr) return;

			for (let i = 0; i < relatedNameArr.length; i++) {
				const relatedFileName = relatedNameArr[i];
				const allAircraftChecklists = checklistStruct.find(
					(aircraft) => aircraft.aircraft === aircraftName
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
				aircraft: aircraftName,
				name: 'important',
				checklists: relatedLists
			});
		});
	}

	return {
		type: 'site',
		content: html,
		relatedChecklists: relatedChecklists,
		siteBtn: true
	};
}
