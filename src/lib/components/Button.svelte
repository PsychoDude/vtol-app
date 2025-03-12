<script lang="ts">
	import { goto } from '$app/navigation';

	let data = $props();

	const colorForTypes: Record<string, string> = {
		aircraft: 'blue',
		global: 'green',
		checklist: 'green',
		emergency: 'red',
		back: 'neutral',
		related: 'green',
		relatedEmergency: 'red',
		relatedCarrier: 'green',
		site: 'site',
		backAircraft: 'blue',
		home: 'home'
	};

	const color: string = colorForTypes[data.type];

	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700 px-4 py-2',
		blue: 'bg-blue-500 hover:bg-blue-700 px-4 py-2',
		red: 'bg-red-500 hover:bg-red-700 px-4 py-2',
		neutral: 'bg-neutral-500 hover:bg-neutral-700 px-4 py-2',
		site: 'text-sm underline p-1',
		home: 'bg-amber-500 hover:bg-amber-700 px-4 py-2'
	};

	const mainBtns: Record<string, string> = {
		true: 'rounded h-70',
		false: ''
	};

	function aircraftRedirect(plane: string) {
		goto(`/${plane}?curac=${plane}`);
	}

	function checklistRedirect(plane: string, file: string) {
		if (data.curac.name) {
			goto(`/${plane}/${file}?curac=${data.curac.aircraft}`);
		} else if (plane !== 'carrier' && plane !== 'global') {
			goto(`/${plane}/${file}?curac=${plane}`);
		} else {
			goto(`/${plane}/${file}`);
		}
	}

	function emergencyRedirect(plane: string, file: string) {
		if (data.curac.name) {
			goto(`/${plane}/emergency/${file}?curac=${data.curac.aircraft}`);
		} else if (plane !== 'carrier' && plane !== 'global') {
			goto(`/${plane}/emergency/${file}?curac=${plane}`);
		} else {
			goto(`/${plane}/emergency/${file}`);
		}
	}

	function siteRedirect(file: string) {
		goto(`/site/${file}`);
	}

	function backAcRedirect(plane: string) {
		goto(`/${plane}?curac=${data.curac.aircraft}`);
	}

	function caseOneRedirect(plane: string, file: string) {
		if (data.curac) {
			goto(`/${plane}/case-1/${file}?curac=${data.curac.aircraft}`);
		} else if (plane !== 'carrier' && plane !== 'global') {
			goto(`/${plane}/case-1/${file}?curac=${plane}`);
		} else {
			goto(`/${plane}/case-1/${file}`);
		}
	}

	function homeRedirect() {
		goto('/');
	}
</script>

<button
	class={`rounded ${colorVariants[color]} text-white ${mainBtns[data.homeBtn]} cursor-pointer`}
	onclick={() => {
		switch (true) {
			case data.siteBtn:
				siteRedirect(data.sitePage);
				break;
			case data.type === 'home':
				homeRedirect();
				break;
			case data.type === 'aircraft':
				aircraftRedirect(data.aircraft);
				break;
			case data.type === 'global':
				aircraftRedirect(data.aircraft);
				break;
			case data.type === 'checklist':
				checklistRedirect(data.aircraft, data.file);
				break;
			case data.type === 'emergency':
				emergencyRedirect(data.aircraft, data.file);
				break;
			case data.type === 'back':
				window.history.back();
				break;
			case data.type === 'backAircraft':
				backAcRedirect(data.curac.aircraft);
				break;
			case data.type === 'related':
				if (data.aircraft === 'emergency') {
					emergencyRedirect(data.aircraft, data.file);
					break;
				} else if (data.aircraft === 'carrier' && data.type === 'case-1') {
					caseOneRedirect(data.aircraft, data.file);
					break;
				} else if (data.siteBtn) {
					siteRedirect(data.sitePage);
				} else {
					checklistRedirect(data.aircraft, data.file);
					break;
				}
			case data.type === 'relatedEmergency':
				emergencyRedirect(data.aircraft, data.file);
				break;
			case data.type === 'relatedCarrier':
				if (data.file === 'case-1') {
					checklistRedirect(data.aircraft, data.file);
				} else {
					caseOneRedirect(data.aircraft, data.file);
				}
				break;

			default:
				break;
		}
	}}
>
	{#if data.curac && data.aircraft === data.curac.aircraft && data.showCurac}
		{data.name} ({data.curac.name})
	{:else}
		{data.name}
	{/if}
</button>
