<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>
		{data.aircraftName} / Emergency / {data.pageName} - VTOL VR Virtual Kneeboard
	</title>
	<meta
		name="description"
		content={` ${data.aircraftName} ${data.pageName} Emergency Checklist - VTOL VR Virtual Kneeboard Companion App`}
	/>
</svelte:head>

{#key data.file}
	<Checklist {data} />
{/key}
