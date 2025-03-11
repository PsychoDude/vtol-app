<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
	const curac = data.curac;
	const backBtnName: { name: string } = { name: 'Back' };
</script>

<svelte:head>
	<title>{data.aircraftName} Menu - VTOL VR App</title>
	<meta name="description" content={`VTOL VR Checklist Companion App ${data.aircraftName} menu.`} />
</svelte:head>

<Button type="back" info={backBtnName} mainBtns="false" {curac} />

<h2 class="my-4 text-2xl font-bold">{data.checklists.name} Checklists</h2>

<div class="mt-4 flex flex-col space-y-2">
	{#each data.checklists.checklists as checklist}
		{#if checklist.showGlobal}
			<Button info={checklist} mainBtns="false" type="checklist" aircraft={data.aircraft} {curac} />
		{/if}
	{/each}

	{#if data.relatedEmergencyChecklists}
		{#each data.relatedEmergencyChecklists.checklists as checklist}
			<Button
				mainBtns="false"
				type="emergency"
				{curac}
				name={checklist.name}
				info={checklist}
				aircraft={data.aircraft}
			/>
		{/each}
	{/if}
</div>

<BackToTop />
