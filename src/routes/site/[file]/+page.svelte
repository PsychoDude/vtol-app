<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Checklist from '$lib/components/Checklist.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>{data.pageName} - VTOL VR App</title>
	<meta name="description" content="VTOL VR Checklist Companion App. " />
</svelte:head>

<Checklist {data} />

<BackToTop />
