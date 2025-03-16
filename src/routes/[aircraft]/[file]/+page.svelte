<script lang="ts">
	import { page } from '$app/state';
	import Checklist from '$lib/components/Checklist.svelte';
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
	<title>{data.aircraftName} / {data.pageName} - VTOL VR Checklists Companion App</title>
	<meta
		name="description"
		content={`VTOL VR Checklists Companion App ${data.aircraftName} ${data.pageName} checklist.`}
	/>
</svelte:head>

{#key data.file}
	<Checklist {data} {curac} />
{/key}
