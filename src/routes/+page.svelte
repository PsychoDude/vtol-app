<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
</script>

<div class="flex space-x-4">
	<div class="mx-auto grid grow grid-cols-3 gap-4">
		{#each data.aircraft as plane}
			<Button info={plane} color="blue" mainBtns="true" />
		{/each}

		{#each data.globalPages as page}
			<Button info={page} color="green" mainBtns="true" />
		{/each}
	</div>
</div>
