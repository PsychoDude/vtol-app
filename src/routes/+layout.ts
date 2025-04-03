import { siteChecklistStruct } from '$lib/checklists';
import type { Curac } from '$lib/types.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url, data }) => {
	let curac: Curac = {
		aircraft: undefined,
		name: undefined
	};
	const sitePages: Array<{ name: string; file: string }> = [];

	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	if (typeof window !== 'undefined') {
		const currentAc = url.searchParams.get('curac');

		if (currentAc)
			curac = data.aircraftNames.find((ac: Curac) => ac.aircraft === currentAc) || {
				aircraft: undefined,
				name: undefined
			};
	}

	return {
		...data,
		curac: curac,
		sitePages: sitePages
	};
};
