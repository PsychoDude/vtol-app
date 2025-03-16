<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>Carrier / Case-1 / {data.pageName} - VTOL VR Checklists Companion App</title>
	<meta
		name="description"
		content={`VTOL VR Checklists Companion App ${data.aircraftName} ${data.pageName} checklist.`}
	/>
</svelte:head>

{#key data.file}
	<Checklist {data} />
{/key}
