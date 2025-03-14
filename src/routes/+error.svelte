<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';

	let error: App.Error | null;

	onMount(() => {
		error = page.error;
	});
</script>

<div class="flex h-[100vh] flex-col items-center gap-5">
	<div class="flex w-100 justify-start gap-3">
		<Button type="back" name="Back" />

		<Button type="home" name="Home" />
	</div>

	{#if error}
		<h1 class="text-center text-5xl text-white">{error.message}</h1>
	{/if}
</div>
