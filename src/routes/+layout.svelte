<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';

	let { children } = $props();

	console.log(page.status);
</script>

<main class="container mx-auto p-4">
	<div class="mt-4">
		{#if page.status === 404}
			<div class="flex flex-col items-center gap-5">
				<div class="flex w-100 justify-start gap-3">
					<Button type="back" name="Back" />

					<Button type="home" name="Home" />
				</div>

				<h1 class="text-center text-5xl text-white">Page Not Found!</h1>
			</div>
		{:else if page.status !== 200}
			<div class="flex flex-col items-center gap-5">
				<div class="flex w-100 justify-start gap-3">
					<Button type="back" name="Back" />

					<Button type="home" name="Home" />
				</div>

				<h1 class="text-center text-5xl text-white">Page Not Found</h1>
			</div>
		{/if}
		{@render children?.()}
	</div>
</main>
