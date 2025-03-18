<script lang="ts">
	import { goto } from '$app/navigation';
	import type { BtnData } from '$lib/types';

	let { type, name, file, aircraft, showCurac, siteBtn, sitePage, homeBtn, curac }: BtnData =
		$props();

	const colorForTypes: Record<string, string> = {
		aircraft: 'blue',
		global: 'green',
		checklist: 'green',
		emergency: 'red',
		back: 'neutral',
		related: 'green',
		relatedEmergency: 'red',
		relatedCarrier: 'green',
		relatedCase1: 'green',
		relatedInfo: 'green',
		site: 'site',
		backAircraft: 'blue',
		home: 'home',
		moddedac: 'yellow'
	};

	const color: string = colorForTypes[type];

	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700 px-4 py-2 text-white',
		blue: 'bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white',
		red: 'bg-red-500 hover:bg-red-700 px-4 py-2 text-white',
		neutral: 'bg-neutral-500 hover:bg-neutral-700 px-4 py-2 text-white',
		yellow: 'bg-yellow-500 hover:bg-yellow-700 px-4 py-2 text-black',
		site: 'text-sm underline p-1 text-white',
		home: 'bg-amber-500 hover:bg-amber-700 px-4 py-2 text-white'
	};

	const mainBtns = homeBtn ? 'rounded h-70' : '';

	function aircraftRedirect(plane: string) {
		goto(`/${plane}?curac=${plane}`);
	}

	function checklistRedirect(plane: string, file: string) {
		if (curac?.aircraft) {
			goto(`/${plane}/${file}?curac=${curac.aircraft}`);
		} else {
			goto(`/${plane}/${file}?curac=${plane}`);
		}
	}

	function emergencyRedirect(plane: string, file: string) {
		if (curac?.aircraft) {
			goto(`/${plane}/emergency/${file}?curac=${curac.aircraft}`);
		} else {
			goto(`/${plane}/emergency/${file}?curac=${plane}`);
		}
	}

	function siteRedirect(file: string) {
		if (curac?.aircraft) {
			goto(`/site/${file}?curac=${curac.aircraft}`);
		} else {
			goto(`/site/${file}`);
		}
	}

	function backAcRedirect() {
		if (curac?.aircraft) goto(`/${curac.aircraft}?curac=${curac.aircraft}`);
	}

	function caseOneRedirect(plane: string, file: string) {
		if (curac?.aircraft) {
			goto(`/${plane}/case-1/${file}?curac=${curac.aircraft}`);
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

{#if type === 'backAircraft'}
	{#if curac?.aircraft}
		<button
			class={`rounded ${colorVariants[color]} ${mainBtns} cursor-pointer`}
			onclick={backAcRedirect}
		>
			{`Back To ${curac.name}`}
		</button>
	{/if}
{:else}
	<button
		class={`rounded ${colorVariants[color]} ${mainBtns} cursor-pointer`}
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
				case type === 'moddedac':
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
					if (aircraft && file) checklistRedirect(aircraft, file);
					break;
				case type === 'relatedCase1':
					if (aircraft && file) caseOneRedirect(aircraft, file);
					break;
				case type === 'relatedInfo':
					if (aircraft && file) checklistRedirect(aircraft, file);
					break;
				default:
					break;
			}
		}}
	>
		{#if curac && aircraft === curac.aircraft && showCurac}
			{name} ({curac.name})
		{:else}
			{name}
		{/if}
	</button>
{/if}
