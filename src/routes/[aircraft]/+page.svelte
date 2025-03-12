<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.aircraftName} Menu - VTOL VR App</title>
	<meta name="description" content={`VTOL VR Checklist Companion App ${data.aircraftName} menu.`} />
</svelte:head>

<div class="flex gap-3">
	<Button type="back" name="Back" />

	<Button type="home" name="Home" />
</div>

<h2 class="my-4 text-2xl font-bold">{data.checklists.name} Checklists</h2>

<div class="mt-4 flex flex-col space-y-2">
	{#each data.checklists.checklists as checklist}
		{#if checklist.showGlobal}
			<Button
				type="checklist"
				name={checklist.name}
				file={checklist.file}
				aircraft={data.aircraft}
				curac={data.curac}
				showCurac={false}
			/>
		{/if}
	{/each}

	{#if data.relatedEmergencyChecklists}
		{#each data.relatedEmergencyChecklists.checklists as checklist}
			<Button
				type="emergency"
				name={checklist.name}
				file={checklist.file}
				aircraft={data.aircraft}
				curac={data.curac}
				showCurac={false}
			/>
		{/each}
	{/if}
</div>

<BackToTop />
