<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

<svelte:head>
	<title>VTOL VR App</title>
	<meta name="description" content="VTOL VR Checklists App. " />
</svelte:head>

<div class="flex space-x-4">
	<div class="mx-auto grid grow grid-cols-3 gap-4">
		{#each data.pages as page}
			{#if page.type === 'aircraft'}
				<Button info={page} mainBtns="true" type="aircraft" aircraftLabel={false} />
			{:else if page.type === 'global'}
				<Button info={page} mainBtns="true" type="global" aircraftLabel={false} />
			{/if}
		{/each}
	</div>
</div>

<BackToTop />
