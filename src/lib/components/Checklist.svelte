<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let data = $props();

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

	{#each data.relatedChecklists as checklist}
		{console.log(checklist)}
		{#each checklist.lists as list}
			{console.log(list)}
			<Button
				type="related"
				mainBtns="false"
				btnName={list.name}
				page={list}
				aircraft={list.aircraft}
			/>
		{/each}
	{/each}
{/if}
