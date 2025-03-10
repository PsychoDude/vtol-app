<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { data, children } = $props();

	function aircraftImportant(page: string) {
		goto(`/site/${page}`);
	}
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
				<p>
					<button
						class="cursor-pointer text-sm underline"
						onclick={() => aircraftImportant(sitePage.file)}
					>
						{sitePage.name}
					</button>
				</p>
			{/each}
		</div>
	{/if}
</div>
