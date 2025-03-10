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
		{#each data.aircraft as plane}
			<Button info={plane} mainBtns="true" type="aircraft" />
		{/each}

		{#each data.globalPages as page}
			<Button info={page} mainBtns="true" type="globalPage" />
		{/each}
	</div>
</div>

<BackToTop />
