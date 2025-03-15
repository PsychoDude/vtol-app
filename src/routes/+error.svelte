<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';

	let message = $state('');

	onMount(() => {
		try {
			message = page.error?.message || '';
		} catch (err) {
			console.error('Error handling:', err);
			// Re-throw to ensure the error is properly handled by svelteKit
			throw err;
		}
	});
</script>

<div class="flex h-[100vh] flex-col items-center gap-5">
	<div class="flex w-100 justify-start gap-3">
		<Button type="back" name="Back" />

		<Button type="home" name="Home" />
	</div>

	{#if message !== ''}
		<h1 class="text-center text-5xl text-white">{message}</h1>
	{/if}
</div>
