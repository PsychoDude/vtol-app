<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import '../app.css';

	let { data, children } = $props();
</script>

<div class="container mx-auto p-4">
	<div class="mt-4">
		{@render children?.()}
	</div>
</div>

<div>
	<p class="mt-8 flex justify-center text-sm">
		This app is licensed under &nbsp;
		<a
			href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
			target="_blank"
			rel="license noopener noreferrer"
			class="flex items-center"
		>
			CC BY-NC-SA 4.0
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
				alt=""
			/>
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
				alt=""
			/>
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
				alt=""
			/>
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
				alt=""
			/>
		</a>
	</p>
	{#if data.sitePages}
		<div class="flex justify-center gap-3">
			{#each data.sitePages as sitePage}
				{#key sitePage.file}
					<Button type="site" name={sitePage.name} siteBtn={true} sitePage={sitePage.file} />
				{/key}
			{/each}
		</div>
	{/if}
</div>
