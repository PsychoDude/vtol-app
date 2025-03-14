<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
</script>

{#if page.error !== null}
	<div class="flex h-[100vh] flex-col items-center gap-5">
		<div class="flex w-100 justify-start gap-3">
			<Button type="back" name="Back" />

			<Button type="home" name="Home" />
		</div>

		<h1 class="text-center text-5xl text-white">{page.error.message}</h1>
	</div>
{/if}
