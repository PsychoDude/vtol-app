<script lang="ts">
	import { goto } from '$app/navigation';
	import type { BtnData } from '$lib/types';

	let {
		type,
		name,
		file,
		aircraft,
		showCurac,
		siteBtn,
		sitePage,
		homeBtn,
		currentAircraft
	}: BtnData = $props();

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

	const color: string = colorForTypes[type];

	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700 px-4 py-2',
		blue: 'bg-blue-500 hover:bg-blue-700 px-4 py-2',
		red: 'bg-red-500 hover:bg-red-700 px-4 py-2',
		neutral: 'bg-neutral-500 hover:bg-neutral-700 px-4 py-2',
		site: 'text-sm underline p-1',
		home: 'bg-amber-500 hover:bg-amber-700 px-4 py-2'
	};

	const mainBtns = homeBtn ? 'rounded h-70' : '';

	function aircraftRedirect(plane: string) {
		goto(`/${plane}?curac=${plane}`);
	}

	function checklistRedirect(plane: string, file: string) {
		if (currentAircraft?.aircraft) {
			goto(`/${plane}/${file}?curac=${currentAircraft.aircraft}`);
		} else {
			goto(`/${plane}/${file}?curac=${plane}`);
		}
	}

	function emergencyRedirect(plane: string, file: string) {
		if (currentAircraft?.aircraft) {
			goto(`/${plane}/emergency/${file}?curac=${currentAircraft.aircraft}`);
		} else {
			goto(`/${plane}/emergency/${file}?curac=${plane}`);
		}
	}

	function siteRedirect(file: string) {
		if (currentAircraft?.aircraft) {
			goto(`/site/${file}?curac=${currentAircraft.aircraft}`);
		} else {
			goto(`/site/${file}`);
		}
	}

	function backAcRedirect(plane: string) {
		if (currentAircraft?.aircraft) goto(`/${plane}?curac=${currentAircraft.aircraft}`);
	}

	function caseOneRedirect(plane: string, file: string) {
		if (currentAircraft?.aircraft) {
			goto(`/${plane}/case-1/${file}?curac=${currentAircraft.aircraft}`);
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
	class={`rounded ${colorVariants[color]} text-white ${mainBtns} cursor-pointer`}
	onclick={() => {
		switch (true) {
			case siteBtn:
				if (sitePage) siteRedirect(sitePage);
				break;
			case type === 'home':
				homeRedirect();
				break;
			case type === 'aircraft':
				if (aircraft) aircraftRedirect(aircraft);
				break;
			case type === 'global':
				if (aircraft) aircraftRedirect(aircraft);
				break;
			case type === 'checklist':
				if (aircraft && file) checklistRedirect(aircraft, file);
				break;
			case type === 'emergency':
				if (aircraft && file) emergencyRedirect(aircraft, file);
				break;
			case type === 'back':
				window.history.back();
				break;
			case type === 'backAircraft':
				if (currentAircraft && currentAircraft.aircraft) backAcRedirect(currentAircraft.aircraft);
				break;
			case type === 'related':
				if (aircraft === 'emergency' && file) {
					emergencyRedirect(aircraft, file);
				} else if (aircraft === 'carrier' && file) {
					caseOneRedirect(aircraft, file);
				} else if (siteBtn && sitePage) {
					siteRedirect(sitePage);
				} else {
					if (aircraft && file) checklistRedirect(aircraft, file);
				}
				break;
			case type === 'relatedEmergency':
				if (aircraft && file) emergencyRedirect(aircraft, file);
				break;
			case type === 'relatedCarrier':
				if (aircraft && file === 'case-1') {
					checklistRedirect(aircraft, file);
				} else {
					if (aircraft && file) caseOneRedirect(aircraft, file);
				}
				break;

			default:
				break;
		}
	}}
>
	{#if currentAircraft && aircraft === currentAircraft.aircraft && showCurac}
		{name} ({currentAircraft.name})
	{:else}
		{name}
	{/if}
</button>
