import type { Curac } from '$lib/types.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url, data }) => {
	let curac: Curac = {
		aircraft: undefined,
		name: undefined
	};

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
		curac: curac
	};
};
