<script lang="ts">
	import { page } from '$app/state';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Button from '$lib/components/Button.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { ChecklistData, Curac } from '$lib/types';
	import { onMount } from 'svelte';

	let { data }: { data: ChecklistData } = $props();
	let curac: Curac = $state({ aircraft: undefined, name: undefined });

	onMount(() => {
		const ac = page.url.searchParams.get('curac');

		if (ac) {
			const plane = data.aircraftNames.find((plane) => plane.aircraft === ac);
			if (plane) curac = plane;
		}
	});
</script>

<svelte:head>
	<title>{data.aircraftName} Menu - VTOL VR Checklists Companion App</title>
	<meta
		name="description"
		content={`VTOL VR Checklists Companion App ${data.aircraftName} menu.`}
	/>
</svelte:head>

<div class="flex gap-3">
	<Button type="back" name="Back" />

	<Button type="home" name="Home" />
</div>

{#if data.checklists}
	<h2 class="my-4 text-2xl font-bold">{data.checklists.name} Checklists</h2>

	<div class="mt-4 flex flex-col space-y-2">
		{#each data.checklists.checklists as checklist (checklist.file)}
			{#if checklist.showGlobal}
				<Button
					type="checklist"
					name={checklist.name}
					file={checklist.file}
					aircraft={data.aircraft}
					currentAircraft={curac}
					showCurac={false}
				/>
			{/if}
		{/each}

		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists.checklists as checklist (checklist.file)}
				<Button
					type="emergency"
					name={checklist.name}
					file={checklist.file}
					aircraft={data.aircraft}
					currentAircraft={curac}
					showCurac={false}
				/>
			{/each}
		{/if}
	</div>
{/if}

{#key `${data.file}-ac`}
	<Footer {data} {curac} />
{/key}

<BackToTop />
