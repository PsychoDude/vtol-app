<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';
	// @ts-expect-error: .svx files not recognized
	import AudioCues from '$lib/components/AudioCues.svx';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>{data.aircraftName} / {data.pageName} - VTOL VR Virtual Kneeboard</title>
	<meta
		name="description"
		content={`${data.aircraftName} / ${data.pageName} - VTOL VR Virtual Kneeboard Companion App`}
	/>
</svelte:head>

{#if data.file === 'audio-cues'}
	<div class="my-5 flex flex-col gap-5">
		<AudioCues {data} />
	</div>
{:else}
	{#key data.file}
		<Checklist {data} />
	{/key}
{/if}
