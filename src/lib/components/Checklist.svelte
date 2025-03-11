<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
	const relatedParams = data.relatedParams || null;
	const showEmergencies = relatedParams ? relatedParams.showEmergencies : false;
	const backBtnName: { name: string } = { name: 'Back' };
</script>

<Button type="back" info={backBtnName} mainBtns="false" curac={data.curac} />

<div class="my-4 flex flex-col gap-5">
	{@html data.content}
</div>

{#if data.relatedChecklists || data.relatedEmergencyChecklists}
	<div class="mt-4">
		<h2 class="mb-4 font-bold uppercase">Related Checklists:</h2>
	</div>

	<div class="flex flex-col space-y-3">
		{#if data.relatedChecklists}
			{#if data.type === 'site'}
				{#each data.relatedChecklists as checklist}
					{#key checklist.file}
						<Button type="related" sitePage={checklist.file} siteBtn={data.siteBtn} />
					{/key}
				{/each}
			{:else}
				{#each data.relatedChecklists as checklist}
					{#each checklist.checklists as list}
						{#key list.file}
							<Button
								type="related"
								info={list}
								aircraft={checklist.aircraft}
								aircraftLabel={data.aircraftLabel}
								siteBtn={data.siteBtn}
								curac={data.curac}
							/>
						{/key}
					{/each}
				{/each}
			{/if}
		{/if}
		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists as checklist}
				{#if data.file !== checklist.file && showEmergencies}
					{#key checklist.file}
						<Button
							type="relatedEmergency"
							info={checklist}
							aircraft={data.aircraft}
							aircraftLabel={checklist.for}
							siteBtn={data.siteBtn}
							curac={data.curac}
						/>
					{/key}
				{:else if data.file !== checklist.file && checklist.type === 'emergency'}
					<Button
						type="relatedEmergency"
						info={checklist}
						aircraft={data.aircraft}
						aircraftLabel={checklist.for}
						siteBtn={data.siteBtn}
						curac={data.curac}
					/>
				{/if}
			{/each}
		{/if}
	</div>
{/if}
