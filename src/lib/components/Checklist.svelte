<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
	const relatedParams = data.relatedParams || null;
	const showEmergencies = relatedParams ? relatedParams.showEmergencies : false;

	let curac = $state(data.curac);
	let isCurac = $derived(data.curac !== undefined && data.curac.name ? true : false);
	let backAcBtnName = $derived.by(() => {
		if (data.curac && data.curac.name) {
			return `Back To ${data.curac.name}`;
		} else {
			return '?';
		}
	});

	$effect(() => {
		curac = data.curac;
	});
</script>

<div class="flex gap-3">
	<Button type="back" name="Back" />

	{#if isCurac}
		<Button type="backAircraft" name={backAcBtnName} {curac} />
	{/if}

	<Button type="home" name="Home" />
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
						<Button type="related" name={checklist.name} sitePage={checklist.file} siteBtn={true} />
					{/key}
				{/each}
			{:else}
				{#each data.relatedChecklists as checklist}
					{#if checklist.aircraft === 'carrier'}
						{#if checklist.checklists}
							{#each checklist.checklists as list}
								{#key list.file}
									<Button
										type="relatedCarrier"
										name={list.name}
										file={list.file}
										aircraft={checklist.aircraft}
										{curac}
										showCurac={false}
									/>
								{/key}
							{/each}
						{/if}
					{:else if checklist.checklists}
						{#each checklist.checklists as list}
							{#key list.file}
								<Button
									type="related"
									name={list.name}
									file={list.file}
									aircraft={data.aircraft}
									{curac}
									showCurac={true}
								/>
							{/key}
						{/each}
					{/if}
				{/each}
			{/if}
		{/if}
		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists.checklists as checklist}
				{#if data.file !== checklist.file && showEmergencies}
					{#key checklist.file}
						<Button
							type="relatedEmergency"
							name={checklist.name}
							file={checklist.file}
							aircraft={data.aircraft}
							{curac}
							showCurac={true}
						/>
					{/key}
				{:else if data.file !== checklist.file && !data.relatedParams}
					{#key checklist.file}
						<Button
							type="relatedEmergency"
							name={checklist.name}
							file={checklist.file}
							aircraft={data.aircraft}
							{curac}
							showCurac={true}
						/>
					{/key}
				{/if}
			{/each}
		{/if}
	</div>
{/if}
