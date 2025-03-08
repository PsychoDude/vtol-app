<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

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
