import { checklistsMD, emerChecklistsMD } from '$lib/markdown.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const filteredChecklists = checklistsMD.filter(
		(planes: { aircraft: string; lists: Array<{ name: string; markdown: string }> }) =>
			planes.aircraft === params.aircraft
	);
	const filteredEmergChecklists = emerChecklistsMD.filter(
		(planes: { aircraft: string; lists: Array<{ name: string; markdown: string }> }) =>
			planes.aircraft === params.aircraft
	);

	if (filteredChecklists.length === 0) error(404, 'Not found yo!');

	return {
		aircraft: params.aircraft,
		checklists: checklistsMD,
		emerChecklists: emerChecklistsMD
	};
}
