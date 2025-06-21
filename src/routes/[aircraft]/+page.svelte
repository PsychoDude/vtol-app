<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>{data.aircraftName} Menu - VTOL VR Virtual Kneeboard</title>
	<meta
		name="description"
		content={` ${data.aircraftName} Menu - VTOL VR Virtual Kneeboard Companion App`}
	/>
</svelte:head>

<div class="flex gap-3">
	<Button type="back" name="Back" curac={data.curac} />

	<Button type="home" name="Home" curac={data.curac} />
</div>

{#if data.checklists}
	<h1 class="my-4 text-center text-3xl font-bold">{data.checklists.name}</h1>

	<div class="mt-4 flex flex-col space-y-2">
		{#each data.checklists.checklists as checklist (checklist.file)}
			{#if checklist.showGlobal}
				<Button
					type="checklist"
					name={checklist.name}
					file={checklist.file}
					aircraft={data.aircraft}
					showCurac={false}
					curac={data.curac}
				/>
			{/if}
		{/each}

		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists.checklists as checklist (checklist.file)}
				<Button
					type="emergency"
					name={checklist.name}
					file={checklist.file}
					aircraft={data.aircraft}
					showCurac={false}
					curac={data.curac}
				/>
			{/each}
		{/if}
	</div>
{/if}
