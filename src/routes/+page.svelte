<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Button from '$lib/components/Button.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { ChecklistData, Curac } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
	let curac: Curac = { aircraft: undefined, name: undefined };
</script>

<svelte:head>
	<title>VTOL VR Checklists Companion App</title>
	<meta name="description" content="VTOL VR Checklists Companion App. " />
</svelte:head>

<div class="flex space-x-4">
	<div class="mx-auto grid grow grid-cols-3 gap-4">
		{#each data.pages as page (page.aircraft)}
			{#if page.type === 'aircraft'}
				<Button type="aircraft" name={page.name} aircraft={page.aircraft} homeBtn={true} />
			{:else if page.type === 'global'}
				<Button type="global" name={page.name} aircraft={page.aircraft} homeBtn={true} />
			{/if}
		{/each}
	</div>
</div>

<Footer {data} {curac} />
