import { marked } from 'marked';
import { checklists, emergencyChecklists } from '$lib/checklists';

const fetchMarkdown = async (file: string): Promise<string> => {
	try {
		const response = await fetch(`/checklists/${file}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
		}
		const text = await response.text();
		let html = await marked(text);
		html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
			return `<img ${attributes} class="w-full h-auto" />`;
		});
		return html;
	} catch (error) {
		console.error('Error fetching markdown:', error);
		return '<p>Failed to load checklist.</p>';
	}
};

function getAircraftLists() {
	let masterList: Array<{ aircraft: string; lists: Array<{ name: string; markdown: string }> }> =
		[];
	let lists: Array<{ name: string; markdown: string }> = [];
	checklists.forEach(async (aircraft) => {
		aircraft.checklists.forEach(async (checklist) => {
			try {
				const html = await fetchMarkdown(checklist.file);
				lists.push({ name: checklist.file, markdown: html });
			} catch (error) {
				console.error('Error fetching markdown:', error);
			}
		});

		masterList.push({ aircraft: aircraft.aircraft, lists: lists });
		lists = [];
	});

	return masterList;
}

function getEmergencyLists() {
	let masterList: Array<{ aircraft: string; lists: Array<{ name: string; markdown: string }> }> =
		[];
	let lists: Array<{ name: string; markdown: string }> = [];
	emergencyChecklists.forEach(async (aircraft) => {
		aircraft.checklists.forEach(async (checklist) => {
			try {
				const html = await fetchMarkdown(checklist.file);
				lists.push({ name: checklist.file, markdown: html });
			} catch (error) {
				console.error('Error fetching markdown:', error);
			}
		});

		masterList.push({ aircraft: aircraft.aircraft, lists: lists });
		lists = [];
	});

	return masterList;
}

export let checklistsMD: Array<{
	aircraft: string;
	lists: Array<{ name: string; markdown: string }>;
}> = getAircraftLists();
export let emerChecklistsMD: Array<{
	aircraft: string;
	lists: Array<{ name: string; markdown: string }>;
}> = getEmergencyLists();
