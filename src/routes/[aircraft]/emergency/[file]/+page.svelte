<script lang="ts">
	import { page } from '$app/state';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Checklist from '$lib/components/Checklist.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { ChecklistData, Curac } from '$lib/types';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let { data }: { data: ChecklistData } = $props();
	let curac: Curac = $state({ aircraft: undefined, name: undefined });

	onMount(() => {
		if (!data.file) error(404, 'Page Not Found.');

		const ac = page.url.searchParams.get('curac');

		if (ac) {
			const plane = data.aircraftNames.find((plane) => plane.aircraft === ac);
			if (plane) curac = plane;
		}
	});
</script>

<svelte:head>
	<title>{data.aircraftName} / Emergency / {data.pageName} - VTOL VR Checklists Companion App</title
	>
	<meta
		name="description"
		content={`VTOL VR Checklists Companion App ${data.aircraftName} ${data.pageName} emergency checklist.`}
	/>
</svelte:head>

{#key data.file}
	<Checklist {data} {curac} />
{/key}

{#key `${data.file}-ac-emerg-file`}
	<Footer {data} {curac} />
{/key}

<BackToTop />
