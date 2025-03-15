<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { page } from '$app/state';
</script>

{#await page.error?.message}
	loading...
{:then errorMessage}
	<div class="flex flex-col items-center gap-5">
		<div class="flex w-100 justify-start gap-3">
			<Button type="back" name="Back" />

			<Button type="home" name="Home" />
		</div>

		<h1 class="text-center text-5xl text-white">{errorMessage}</h1>
	</div>
{/await}
