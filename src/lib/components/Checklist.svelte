<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();

	const relatedParams = data.relatedParams || null;

	const showGlobal = relatedParams ? relatedParams.showGlobal : false;
	const showEmergencies = relatedParams ? relatedParams.showEmergencies : false;
	const hidden = relatedParams ? relatedParams : false;

	const backBtnName: { name: string } = { name: 'Back' };
</script>

<Button type="back" info={backBtnName} mainBtns="false" />

<div class="my-4 flex flex-col gap-3">
	{@html data.content}
</div>

{#if data.relatedChecklists}
	<div class="mt-4">
		<h2 class="mb-4 font-bold uppercase">Related Checklists:</h2>
	</div>

	<div class="flex flex-col space-y-3">
		{#if data.relatedChecklists}
			{#if data.type === 'site'}
				{#each data.relatedChecklists as checklist}
					{#key checklist.file}
						<Button
							type="related"
							mainBtns="false"
							info={checklist}
							aircraft={checklist.aircraft}
							aircraftLabel={data.aircraftLabel}
							siteBtn={data.siteBtn}
						/>
					{/key}
				{/each}
			{:else}
				{#each data.relatedChecklists as checklist}
					{#each checklist.checklists as list}
						{#key list.file}
							<Button
								type="related"
								mainBtns="false"
								info={list}
								aircraft={checklist.aircraft}
								aircraftLabel={data.aircraftLabel}
								siteBtn={data.siteBtn}
							/>
						{/key}
					{/each}
				{/each}
			{/if}
		{/if}
		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists.checklists as checklist}
				{#if data.file !== checklist.file && showEmergencies}
					{#key checklist.file}
						<Button
							type="relatedEmergency"
							mainBtns="false"
							info={checklist}
							aircraft={data.aircraft}
							aircraftLabel={data.aircraftLabel}
							siteBtn={data.siteBtn}
						/>
					{/key}
				{/if}
			{/each}
		{/if}
	</div>
{/if}
