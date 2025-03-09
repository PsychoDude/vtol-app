<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();

	const backBtnName: { name: string } = { name: 'Back' };
</script>

<Button type="back" info={backBtnName} mainBtns="false" />

<div class="my-4">
	{@html data.content}
</div>

{#if data.relatedChecklists}
	<div class="mt-4">
		<h2 class="mb-2 font-bold uppercase">Related Checklists:</h2>
	</div>

	<div class="flex flex-col space-y-2">
		{#if data.relatedChecklists}
			{#each data.relatedChecklists as checklist}
				{#each checklist.checklists as list}
					<Button
						type="related"
						mainBtns="false"
						info={list}
						aircraft={checklist.aircraft}
						aircraftLabel={data.aircraftLabel}
					/>
				{/each}
			{/each}
		{/if}
		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists.checklists as checklist}
				<Button
					type="relatedEmergency"
					mainBtns="false"
					info={checklist}
					aircraft={data.aircraft}
					aircraftLabel={data.aircraftLabel}
				/>
			{/each}
		{/if}
	</div>
{/if}
