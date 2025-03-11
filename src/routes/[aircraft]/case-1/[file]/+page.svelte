<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Checklist from '$lib/components/Checklist.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.aircraftName} / Case-1 / {data.pageName} - VTOL VR App</title>
	<meta
		name="description"
		content={`VTOL VR Checklists Companion App ${data.aircraftName} case-1 ${data.pageName} checklist.`}
	/>
</svelte:head>

{#key data.file}
	<Checklist {data} />
{/key}

<BackToTop />
