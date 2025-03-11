<script lang="ts">
	import { goto } from '$app/navigation';
	import { getSitePageName } from '$lib/checklists';

	let data = $props();
	const curac = data.curac;

	const colorForTypes: Record<string, string> = {
		aircraft: 'blue',
		global: 'green',
		checklist: 'green',
		emergency: 'red',
		back: 'neutral',
		related: 'green',
		relatedEmergency: 'red',
		site: 'site',
		backAircraft: 'blue'
	};

	const color: string = colorForTypes[data.type];

	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700 px-4 py-2',
		blue: 'bg-blue-500 hover:bg-blue-700 px-4 py-2',
		red: 'bg-red-500 hover:bg-red-700 px-4 py-2',
		neutral: 'bg-neutral-500 hover:bg-neutral-700 px-4 py-2',
		site: 'text-sm underline p-1'
	};

	const mainBtns: Record<string, string> = {
		true: 'rounded h-70',
		false: ''
	};

	function aircraftRedirect(plane: string) {
		if (plane !== 'carrier' && plane !== 'global') {
			goto(`/${plane}?curac=${plane}`);
		} else {
			goto(`/${plane}`);
		}
	}

	function checklistRedirect(plane: string, file: string) {
		if (curac.name) {
			goto(`/${plane}/${file}?curac=${curac.aircraft}`);
		} else {
			goto(`/${plane}/${file}`);
		}
	}

	function emergencyRedirect(plane: string, file: string) {
		if (curac) {
			goto(`/${plane}/emergency/${file}?curac=${curac.aircraft}`);
		} else {
			goto(`/${plane}/emergency/${file}`);
		}
	}

	function siteRedirect(file: string) {
		goto(`/site/${file}`);
	}

	function backAcRedirect(plane: string) {
		goto(`/${plane}?curac=${curac.aircraft}`);
	}

	function caseOneRedirect(plane: string, file: string) {
		if (curac) {
			goto(`/${plane}/case-1/${file}?curac=${curac.aircraft}`);
		} else {
			goto(`/${plane}/case-1/${file}`);
		}
	}

	let aircraftNameForBtn = '';

	if (
		data.info &&
		data.info.for !== 'carrier' &&
		data.info.for !== 'global' &&
		data.info.for !== 'site'
	)
		aircraftNameForBtn = data.aircraftLabel ? data.info.for : '';

	const sitePageName = data.sitePage ? getSitePageName(data.sitePage) : '';

	const btnText =
		sitePageName !== ''
			? sitePageName
			: aircraftNameForBtn !== ''
				? `${data.info.name} (${aircraftNameForBtn})`
				: `${data.info.name}`;
</script>

<button
	class={`rounded ${colorVariants[color]} text-white ${mainBtns[data.mainBtns]} cursor-pointer`}
	onclick={() => {
		switch (true) {
			case data.siteBtn:
				siteRedirect(data.sitePage);
				break;
			case data.type === 'aircraft':
				aircraftRedirect(data.info.aircraft);
				break;
			case data.type === 'global':
				aircraftRedirect(data.info.aircraft);
				break;
			case data.type === 'checklist':
				checklistRedirect(data.aircraft, data.info.file);
				break;
			case data.type === 'emergency':
				emergencyRedirect(data.aircraft, data.info.file);
				break;
			case data.type === 'back':
				window.history.back();
				break;
			case data.type === 'backAircraft':
				backAcRedirect(curac.aircraft);
				break;
			case data.type === 'related':
				if (data.info.aircraft === 'emergency') {
					emergencyRedirect(data.aircraft, data.info.file);
					break;
				}
				if (data.aircraft === 'carrier' && data.info.type === 'case-1') {
					caseOneRedirect(data.aircraft, data.info.file);
					break;
				}

				checklistRedirect(data.aircraft, data.info.file);
				break;
			case data.type === 'relatedEmergency':
				emergencyRedirect(data.aircraft, data.info.file);
				break;

			default:
				break;
		}
	}}
>
	{`${btnText}`}
</button>
