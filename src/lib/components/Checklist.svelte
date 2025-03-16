<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { ChecklistData } from '$lib/types';
	import Nav from './Nav.svelte';

	let { data }: { data: ChecklistData } = $props();
	const relatedParams = data.relatedParams || null;
	const showEmergencies = relatedParams ? relatedParams.showEmergencies : false;
</script>

<Nav curac={data.curac} />

<div class="my-5 flex flex-col gap-5">
	{@html data.content}
</div>

{#if data.relatedChecklists || data.relatedEmergencyChecklists}
	<h2 class="mb-5 font-bold uppercase">Related Checklists:</h2>

	<div class="flex flex-col space-y-3">
		{#if data.relatedChecklists}
			{#if data.type === 'site'}
				{#each data.relatedChecklists as checklist (checklist.file)}
					<Button
						type="related"
						name={checklist.name}
						sitePage={checklist.file}
						siteBtn={true}
						curac={data.curac}
					/>
				{/each}
			{:else}
				{#each data.relatedChecklists as checklist (`${checklist.file}-${checklist.aircraft}-${checklist.aircraft}`)}
					{#if checklist.aircraft === 'carrier'}
						{#if checklist.checklists}
							{#each checklist.checklists as list (`${list.file}-${list.aircraft}-${list.type}`)}
								{#if list.type === 'case-1'}
									<Button
										type="relatedCase1"
										name={list.name}
										file={list.file}
										aircraft={checklist.aircraft}
										showCurac={false}
										curac={data.curac}
									/>
								{:else}
									<Button
										type="relatedCarrier"
										name={list.name}
										file={list.file}
										aircraft={checklist.aircraft}
										showCurac={false}
										curac={data.curac}
									/>
								{/if}
							{/each}
						{/if}
					{:else if checklist.checklists}
						{#each checklist.checklists as list (`${list.file}-${list.aircraft}-${list.type}`)}
							<Button
								type="related"
								name={list.name}
								file={list.file}
								aircraft={data.aircraft}
								showCurac={true}
								curac={data.curac}
							/>
						{/each}
					{/if}
				{/each}
			{/if}
		{/if}
		{#if data.relatedEmergencyChecklists}
			{#each data.relatedEmergencyChecklists.checklists as checklist (`${checklist.file}-${checklist.for}-${checklist.type}`)}
				{#if data.file !== checklist.file && showEmergencies}
					<Button
						type="relatedEmergency"
						name={checklist.name}
						file={checklist.file}
						aircraft={data.aircraft}
						showCurac={true}
						curac={data.curac}
					/>
				{:else if data.file !== checklist.file && !data.relatedParams}
					<Button
						type="relatedEmergency"
						name={checklist.name}
						file={checklist.file}
						aircraft={data.aircraft}
						showCurac={true}
						curac={data.curac}
					/>
				{/if}
			{/each}
		{/if}
	</div>
{/if}
