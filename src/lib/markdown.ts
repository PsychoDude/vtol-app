import { marked } from 'marked';
import { checklistStruct, emergencyChecklistsStruct } from '$lib/checklists';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function getAircraftSlugs() {
	const aircraftSlugArr: { aircraft: string; file: string }[] = [];
	const caseOneSlugArr: { aircraft: string; file: string }[] = [];
	checklistStruct.forEach((aircraft) => {
		for (const list in aircraft.checklists) {
			if (aircraft.checklists[list].type === 'case-1') {
				caseOneSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[list].file
				});
			} else {
				aircraftSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[list].file
				});
			}
		}
	});

	return [aircraftSlugArr, caseOneSlugArr];
}

export async function getEmergencySlugs() {
	const emergencySlugArr: { aircraft: string; file: string }[] = [];
	emergencyChecklistsStruct.forEach((aircraft) => {
		for (const list in aircraft.checklists) {
			emergencySlugArr.push({
				aircraft: aircraft.aircraft,
				file: aircraft.checklists[list].file
			});
		}
	});

	return emergencySlugArr;
}
export async function getMarkdown(urlPath: string) {
	const pathname = path.resolve(`src/checklists/${urlPath}.md`);
	try {
		let html = await fs.readFile(pathname, 'utf-8');

		html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
			return `<img ${attributes} class="w-full h-auto" />`;
		});

		const markdown = marked(html);

		return markdown;
	} catch (err) {
		console.error('Error reading file:', err);
		return null;
	}
}
