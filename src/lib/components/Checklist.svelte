<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
	const relatedParams = data.relatedParams || null;
	const showEmergencies = relatedParams ? relatedParams.showEmergencies : false;
	const backBtnName: { name: string } = { name: 'Back' };
	const curac = data.curac.name;
	const backAcBtnName = { name: `Back To ${curac}` };
</script>

<div class="flex gap-3">
	<Button
		type="back"
		info={backBtnName}
		mainBtns="false"
		curac={data.curac}
		aircraft={data.aircraft}
	/>

	{#if curac}
		<Button type="backAircraft" info={backAcBtnName} mainBtns="false" curac={data.curac} />
	{/if}
</div>

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
			{#each data.relatedEmergencyChecklists.checklists as checklist}
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
				{:else if data.file !== checklist.file && !data.relatedParams}
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
				{/if}
			{/each}
		{/if}
	</div>
{/if}
