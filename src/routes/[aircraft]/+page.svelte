<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	let { data } = $props();
	const backBtnName: { name: string } = { name: 'Back' };
</script>

<Button type="back" info={backBtnName} mainBtns="false" />

<h2 class="my-4 text-2xl font-bold">{data.checklists.name} Checklists</h2>

<div class="mt-4 flex flex-col space-y-2">
	{#each data.checklists.checklists as checklist}
		<Button info={checklist} mainBtns="false" type="checklist" aircraft={data.aircraft} />
	{/each}

	{#if data.emergencyLists}
		{#each data.emergencyLists.checklists as checklist}
			<Button info={checklist} mainBtns="false" type="emergency" aircraft={data.aircraft} />
		{/each}
	{/if}
</div>
