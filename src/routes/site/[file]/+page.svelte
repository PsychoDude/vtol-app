<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>{data.pageName} - VTOL VR Virtual Kneeboard</title>
	<meta name="description" content={`${data.pageName} - VTOL VR Virtual Kneeboard Companion App`} />
</svelte:head>

{#key `${data.file}-site`}
	<Checklist {data} />
{/key}
