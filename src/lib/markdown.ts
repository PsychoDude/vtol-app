import { marked } from 'marked';
import { checklistStruct, emergencyChecklistsStruct, siteChecklistStruct } from '$lib/checklists';
import fs from 'node:fs/promises';
import path from 'node:path';

export function getAircraftSlugs() {
	const aircraftSlugArr: { aircraft: string; file: string }[] = [];
	const caseOneSlugArr: { aircraft: string; file: string }[] = [];

	checklistStruct.forEach((aircraft) => {
		for (let i = 0; i < aircraft.checklists.length; i++) {
			if (aircraft.checklists[i].type === 'case-1') {
				caseOneSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[i].file
				});
			} else {
				aircraftSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[i].file
				});
			}
		}
	});

	return [aircraftSlugArr, caseOneSlugArr];
}

export function getAircraftOnlySlugs() {
	const aircraftSlugArr: { aircraft: string }[] = [];

	checklistStruct.forEach((aircraft) => {
		aircraftSlugArr.push({ aircraft: aircraft.aircraft });
	});

	return aircraftSlugArr;
}

export function getEmergencySlugs() {
	const emergencySlugArr: { aircraft: string; file: string }[] = [];
	emergencyChecklistsStruct.forEach((aircraft) => {
		for (let i = 0; i < aircraft.checklists.length; i++) {
			emergencySlugArr.push({
				aircraft: aircraft.aircraft,
				file: aircraft.checklists[i].file
			});
		}
	});

	return emergencySlugArr;
}

export function getSiteSlugs() {
	const siteSlugArr: { file: string }[] = [];
	siteChecklistStruct.forEach((checklist) => {
		siteSlugArr.push({
			file: checklist.file
		});
	});

	return siteSlugArr;
}

export async function getMarkdown(urlPath: string) {
	const pathname = path.resolve(`src/checklists/${urlPath}.md`);

	console.log(pathname);
	try {
		let html = await fs.readFile(pathname, 'utf-8');

		html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
			return `<img ${attributes} class="w-full h-auto" />`;
		});

		const markdown = await marked(html);

		return markdown;
	} catch (err) {
		console.error('Error reading file:', err);
		return null;
	}
}
