<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.pageName} - VTOL VR App</title>
	<meta name="description" content="VTOL VR Checklists App. " />
</svelte:head>

<Checklist {data} />
