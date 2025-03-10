<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.aircraftName} / {data.pageName} - VTOL VR App</title>
	<meta
		name="description"
		content={`VTOL VR Checklists App ${data.aircraftName} ${data.pageName} emergency checklist.`}
	/>
</svelte:head>

<Checklist {data} />
