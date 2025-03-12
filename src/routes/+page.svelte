<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

<svelte:head>
	<title>VTOL VR App</title>
	<meta name="description" content="VTOL VR Checklist Companion App. " />
</svelte:head>

<div class="flex space-x-4">
	<div class="mx-auto grid grow grid-cols-3 gap-4">
		{#each data.pages as page}
			{#if page.type === 'aircraft'}
				<Button name={page.name} aircraft={page.aircraft} homeBtn={true} type="aircraft" />
			{:else if page.type === 'global'}
				<Button name={page.name} aircraft={page.aircraft} homeBtn={true} type="global" />
			{/if}
		{/each}
	</div>
</div>

<BackToTop />
