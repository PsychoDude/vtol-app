<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Checklist from '$lib/components/Checklist.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.aircraftName} / {data.pageName} - VTOL VR App</title>
	<meta
		name="description"
		content={`VTOL VR Checklists App ${data.aircraftName} ${data.pageName} checklist.`}
	/>
</svelte:head>

<Checklist {data} />

<BackToTop />
