import { getAllAircraftNames } from '#lib/checklists.ts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	const aircraftNames = getAllAircraftNames();

	return {
		aircraftNames: aircraftNames
	};
};
