import { getAllAircraftNames } from '$lib/checklists';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	const aircraftNames = getAllAircraftNames();

	return {
		aircraftNames: aircraftNames
	};
};
